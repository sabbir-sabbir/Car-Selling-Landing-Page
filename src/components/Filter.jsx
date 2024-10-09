const Type = ()=> {
    return(
        <div className="d-flex justify-content-center align-items-center">
            <label htmlFor="">
                <span className="fw-normal text-start filter-search-label">Type</span>

                <select name="" id="" className="form-select fw-bold fs-6  filter-search-select">
                    <option value="" className="fw-bold fs-6">Used Cars</option>
                    <option value="" className="fw-bold fs-6">New Cars</option>
                    <option value="" className="fw-bold fs-6">Restored Cars</option>
                </select>
            </label>
            <div className="vertical-line"></div>

        </div>
    )
};

const Make = ()=> {
    return(
        <div className="d-flex justify-content-center align-items-center">
            <label htmlFor="">
                <span className="fw-normal text-start filter-search-label">Make</span>

                <select name="" id="" className="form-select fw-bold fs-6 outline-none  filter-search-select" aria-label="infiniti">
                    <option value="" className="fw-bold fs-6">BMW</option>
                    <option value="" className="fw-bold fs-6">TOYOTA</option>
                    <option value="" className="fw-bold fs-6">FERRARI</option>
                </select>
            </label>
            <div className="vertical-line"></div>

        </div>
    )
};

const Year = ()=> {
    return (
        <div className="d-flex justify-content-center align-items-center  ">
            <label>
                <span className="fw-normal fs-7 text-start filter-search-label">Year</span>
                <select name="" id="" className="form-select outline-none fw-bold fs-6 filter-search-select">
                    <option value="" className="fw-bold fs-6 ">2020</option>
                    <option value="" className="fw-bold fs-6 ">2021</option>
                    <option value="" className="fw-bold fs-6 ">2022</option>
                </select>
            </label>
            <div className="vertical-line"></div>

        </div>
    )
};

const Model = ()=> {
    return(
        <div className="d-flex justify-content-center align-items-center">
        <label>
            <span className="fw-normal fs-7 text-start filter-search-label">Model</span>
            <select name="" id="" className="form-select outline-none fw-bold fs-6 filter-search-select">
                <option value="" className="fw-bold fs-6 ">BMW_XOF</option>
                <option value="" className="fw-bold fs-6 ">BMW_XCR5</option>
                <option value="" className="fw-bold fs-6 ">FERRARI-55RT</option>
            </select>
        </label>
        <div className="vertical-line"></div>

    </div>
    )
};

const Price = ()=> {
    return(

        <div className="d-flex justify-content-center align-items-center">
        <label>
            <span className="fw-normal fs-7 text-start filter-search-label">Price</span>
            <select name="" id="" className="form-select outline-none fw-bold fs-6 filter-search-select">
                <option value="" className="fw-bold fs-6 ">500,99$</option>
                <option value="" className="fw-bold fs-6 ">50,000$</option>
                <option value="" className="fw-bold fs-6 ">99,000$</option>
            </select>
        </label>
        <div className="vertical-line"></div>

    </div>
    )
};

export const FilterSearch= ()=> {
  return(
    <>
    <section className="main-section">
        <h1 className="text-center fw-bold fs-3 ">Which vehicles you are looking for? </h1>
        <div className="d-flex justify-content-center align-items-center gap-3 filter-search-box">
            <Type />
            <Make />
            <Year />
            <Model />
            <Price/>
            <button className="btn btn-primary search-button"><i class="bi bi-search"></i>  Search</button>

        </div>
    </section>
    </>
  )
};


