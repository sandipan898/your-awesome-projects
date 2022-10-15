const DeletePopup = (props) => {
    // alert("Sure you want to Delete?")
    
    return (
        <div className="ui main">
            <h2>Sure you want to Delete the Contact?</h2>
            <button onClick={() => {
                    props.getContactId(props.location.state.contactId)
                    props.history.push('/')
                }} 
                className="ui button blue center">I'm Sure</button>
            <button className="ui button green center">No</button>
        </div>
    )
};

export default DeletePopup;