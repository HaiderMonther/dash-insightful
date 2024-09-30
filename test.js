async function login(username, password) {
    const res = await fetch("http://198.244.227.48:8082/auth/admins/login", {
        method : "POST",
        headers : {
            "Authorization" : `dfdfbnrsnet5 a415862b-3114-418b-ab6c-31388938680d`,
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({
            username,
            password
        })
    })
    const data = await res.json();
    console.log(data);
}

const username = "ali_7saen";
const password = "23394334";
login(username, password)