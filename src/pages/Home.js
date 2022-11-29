const Home = () => {
    return (
        <div className="LoginBody">
          <input type="checkbox" id="chk" aria-hidden="true" />

            <div className="signup">
              <form action="/oneBeer">
                <label htmlFor="chk" aria-hidden="true">Sign up</label>
                <input type="text" name="txt" placeholder="User name" required="" id="signupUname"/>
                <input type="password" name="pswd" placeholder="Password" required="" id="signupPword"/>
                <button onClick={signUp}>Sign up</button>
              </form>
            </div>

            <div className="login">
              <form action="/oneBeer">
                <label htmlFor="chk" aria-hidden="true">Login</label>
                <input type="text" name="username" placeholder="User name" required="" id="loginUname"/>
                <input type="password" name="pswd" placeholder="Password" required="" id="loginPword"/>
                <button onClick={login}>Login</button>
              </form>
            </div>
        </div>
      );
}

const signUp = () => {
    let uName = document.getElementById("signupUname").value;
    let pWord = document.getElementById("signupPword").value;
    console.log(uName); // remove
    console.log(pWord); // remove
    // hier dus een login doen en een userID ergens halen die gelinkt is aan zijn recommender profiel

}

const login = () => {
  let uName = document.getElementById("loginUname").value;
  let pWord = document.getElementById("loginPword").value;
  console.log(uName); // remove
  console.log(pWord); // remove
  // hier dus checken of credentials goed zijn en de ID halen gelinkt aan recommender profiel

}

export default Home;