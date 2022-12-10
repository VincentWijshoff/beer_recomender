const Home = () => {
    return (
        <div className="LoginBody">
          <input type="checkbox" id="chk" aria-hidden="true" />

            <div className="signup">
              <form action="/register">
                <label htmlFor="chk" aria-hidden="true">Sign up</label>
                <input type="text" name="txt" placeholder="User name" required="1" id="signupUname"/>
                <input type="password" name="pswd" placeholder="Password" required="1" id="signupPword"/>
                <button className="button">Sign up</button>
              </form>
            </div>

            <div className="login">
              <form action="/login">
                <label htmlFor="chk" aria-hidden="true">Login</label>
                <input type="text" name="username" placeholder="User name" required="1" id="loginUname"/>
                <input type="password" name="pswd" placeholder="Password" required="1" id="loginPword"/>
                <button className="button">Login</button>
              </form>
            </div>
        </div>
      );
}

export default Home;