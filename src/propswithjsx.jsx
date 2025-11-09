function User({name="user",children, color}){
    return <div>
        <h1>User Component with jsx props</h1>
            <h1>hi {name}</h1>

            {children}

    </div>
}

export default User;