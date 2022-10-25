#!/usr/bin/env python
# coding: utf-8

# ## Churn Modelling
# 
# This project data set contains details of a bank's customers and the target variable is a binary variable
# which is reflecting the fact whether the customer left the bank (closed his account) or he continues to be a customer. 
# So here I am going to build a model that will determine if a customer will continue with bank or not.

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

from sklearn.model_selection import train_test_split
from sklearn.metrics import auc
from sklearn.metrics import roc_auc_score
from sklearn.metrics import roc_curve
from sklearn.metrics import mutual_info_score
from sklearn.metrics import accuracy_score
from sklearn.feature_extraction import DictVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier
from sklearn.tree import DecisionTreeClassifier
from sklearn.tree import export_text

import xgboost as xgb
import pickle

print('Loading data...')
df = pd.read_csv('Churn_Modelling.csv')
print('loaded data')

##  Data-Cleaning: Cleaning strings in column
# convert all columns to lower
print('cleaning and preparing data...')
df.columns = df.columns.str.lower()

# change all "string" data to lowercase
string_columns = list(df.dtypes[df.dtypes == 'object'].index)
for col in string_columns:
    df[col] = df[col].str.lower()

# remove the less important models
del df['rownumber']
del df['customerid']
del df['surname']

# has credit cards encoding
hascrcard_values = {
    1: 'yes',
    0: 'no'
}

df.hascrcard = df.hascrcard.map(hascrcard_values)

# is an active member encoding
isactivemember_values = {
    1: 'yes',
    0: 'no'
}

df.isactivemember = df.isactivemember.map(isactivemember_values)

# split the categorical and numerical columns
categorical =list(df.select_dtypes('object').columns)
numerical = list(df.drop(['exited'], axis=1).select_dtypes('number').columns)

print('Numerical: ', numerical)
print('Categorical: ', categorical)

# ### Data separation  - Setting up the validation framework
# 
# I am gonna split it into three datasets (train, val, and test) - training, validation and test datasets
# I will use scikit-learn for this step

df_full_train, df_test = train_test_split(df, test_size=0.2, random_state=43)
df_train, df_val = train_test_split(df_full_train, test_size=0.25, random_state=43)

# sanity check
print('Splitted data set: ', (len(df_train) / len(df)), (len(df_val) / len(df)), (len(df_val) / len(df)))

df_train = df_train.reset_index(drop=True)
df_val = df_val.reset_index(drop=True)
df_test = df_test.reset_index(drop=True)

y_train = df_train.exited.values
y_val = df_val.exited.values
y_test = df_test.exited.values

# drop target column
df_train = df_train.drop('exited', axis=1)
df_val = df_val.drop('exited', axis=1)
df_test = df_test.drop('exited', axis=1)

print('cleaned and prepared data...')

# TRAINING
print('Training started.')
train_dicts = df_train.to_dict(orient='records')
dv = DictVectorizer(sparse=False)
X_train = dv.fit_transform(train_dicts)

val_dicts = df_val.to_dict(orient='records')
X_val = dv.transform(val_dicts)

test_dict = df_test[categorical + numerical].to_dict(orient='records')
X_test = dv.transform(test_dict)

# we have to convert it to a form that can be processed by xgBoost
features = dv.get_feature_names_out()
dtrain = xgb.DMatrix(X_train, label=y_train, feature_names=features)
dval = xgb.DMatrix(X_val, label=y_val, feature_names=features)

# the best model parameters after tuning is
xgb_params = {
    'eta': 0.1, 
    'max_depth': 4,
    'min_child_weight': 1,
    
    'objective': 'binary:logistic',
    'eval_metric': 'auc',

    'nthread': 8,
    'seed': 1,
    'verbosity': 1,
}

model = xgb.train(xgb_params, dtrain, num_boost_round=100)
y_pred = model.predict(dval)
print('AUC on model from validation dataset: ', roc_auc_score(y_val, y_pred))

# TRAINING ON FULL_TRAIN DATASET
print('Training the final model...')
df_full_train = df_full_train.reset_index(drop=True)
y_full_train = df_full_train.exited

# removing the predicting column
del df_full_train['exited']

dicts_full_train = df_full_train.to_dict(orient='records')
# dv = DictVectorizer(sparse=False)
X_full_train = dv.fit_transform(dicts_full_train)

dfulltrain = xgb.DMatrix(X_full_train, label=y_full_train,
                    feature_names=dv.get_feature_names_out())
dtest = xgb.DMatrix(X_test, feature_names=dv.get_feature_names_out())

xgb_params = {
    'eta': 0.1, 
    'max_depth': 4,
    'min_child_weight': 1,
    
    'objective': 'binary:logistic',
    'eval_metric': 'auc',

    'nthread': 8,
    'seed': 1,
    'verbosity': 1,
}

model = xgb.train(xgb_params, dtrain, num_boost_round=100)
y_pred = model.predict(dtest)
print('The AUC on the final model is: ', roc_auc_score(y_test, y_pred))

# saving model
print('Saving model...')
output_file = 'model_v0.bin'

with open(output_file, 'wb') as f_out:
    pickle.dump((dv, model), f_out)

print('Model saved as: {}'.format(output_file))
