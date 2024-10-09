function Footer() {
    return (
      <footer className="mt-2">
        <div className="d-flex justify-content-around">
          <div>
            <span className="fw-bold">Privacy Policy</span>
            <span className="fw-bold mx-3">Term of Use</span>
            <span className="opacity-50">© 2021 All rights reserved</span>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <span className="opacity-50 ">
              <img src="Images/icon.svg" alt="" />
              <span className="ms-2">English</span>
            </span>
            <span className="opacity-50 ms-3">
              <img src="Images/icon1.svg" alt="" />
              <span className="ms-2">USD</span>
            </span>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer