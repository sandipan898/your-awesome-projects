import pickle

import xgboost as xgb
from flask import Flask
from flask import render_template, request

model_file = 'model_v0.bin'
print('loading model...')
with open(model_file, 'rb') as f_in:
    dv, model = pickle.load(f_in)

print('Loaded model: ', (dv, model))

app = Flask(__name__, template_folder='templates')


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/predict', methods=['POST'])
def predict():
    customer = {
        "geography": "france",
        "gender": "female",
        "age": 57,
        "hascrcard": "yes",
        "isactivemember": "no",
        "creditscore": 562,
        "tenure": 3,
        "balance": 0.0,
        "numofproducts": 3,
        "estimatedsalary": 6554.97
    }
    customer_features = [x for x in request.form.values()]
    print('customer features: ', customer_features)

    pos = 0
    for key, value in customer.items():
        if pos == len(customer_features):
            break
        value = customer_features[pos]
        if value.isnumeric():
            value = int(value)
        customer[key] = value
        pos += 1

    # customer = request.get_json()
    print('customer: ', customer)
    X = dv.transform([customer])
    dtest = xgb.DMatrix(X, feature_names=dv.get_feature_names_out())
    exited_prob = model.predict(dtest)[0]
    churn = exited_prob >= 0.5
    if churn == 0:
        prediction_text = 'This customer WILL NOT exit our bank!'
    else:
        prediction_text = 'This customer will exit our bank!'
 
    return render_template('index.html',
                           prediction_text=prediction_text + ' with a probability of ' + str(round(exited_prob, 3)))


if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=9696)
