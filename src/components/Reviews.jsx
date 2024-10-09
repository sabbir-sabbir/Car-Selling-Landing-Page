import { Col, Row } from 'react-bootstrap'

const ReviewDetails = [
  {
    id: 1,
    img: 'img/4.png',
    title: '2021 Cadillac Escalade',
    description:
      'The 2021 Escalade is a technological showcase and a worthy claimant of the flagship American luxury vehicle title.',
    user: {
      name: 'Hironaka Hiroe',
      position: 'Chief Editor',
      star: '4.91',
      total: '(98)',
    },
  },
  {
    id: 2,
    img: 'img/5.png',
    title: '2021 Hyundai Elantra',
    description:
      'If developing a car was a marathon technological showcase, Hyundai didn’t run the last mile with the 2021 Elantra. ',
    user: {
      name: 'Debashis Bhuiyan',
      position: 'News Editor',
      star: '4.65',
      total: '(93)',
    },
  },
  {
    id: 3,
    img: 'img/6.png',
    title: '2021 Mercedes-Benz GLA250',
    description:
      'The new entry point into Mercedes-Benz’s SUV lineup is bigger and improved, but still features a frustrating powertrain. ',
    user: {
      name: 'Lew Silverton',
      position: 'Chief Editor',
      star: '4.55',
      total: '(35)',
    },
  },
]

function Review() {
  return (
    <div className="container-fluid reviewMt">
      <h1 className="text-center reviewTitle mb-4">Recent reviews</h1>
      <Row className="d-flex justify-content-center mx-auto">
        {ReviewDetails.map(({ id, img, title, description, user }) => (
          <Col key={id} lg={4}>
            <div className="review mx-auto mt-5">
              <img src={img} alt="" />
              <div className="mt-3">
                <div className="fw-bold">{title}</div>
                <div className="opacity-50">{description}</div>
              </div>
              <div className="d-flex justify-content-between align-content-center mt-3">
                <div className="d-flex gap-3">
                  <div>
                    <div className="fw-bold">{user.name}</div>
                    <div className="opacity-75">{user.position}</div>
                  </div>
                </div>
                <div className="me-3">
                  <img src="Images/star.svg" alt="" />
                  <span className="fw-bold mx-1 text-danger">{user.star}</span>
                  <span className="text-primary">{user.total}</span>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Review