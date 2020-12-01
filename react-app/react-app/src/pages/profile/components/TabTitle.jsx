export default function TabTitle() {
  return (
    <>
      <div className="member-content__left">
        <ul>
          <li>
            <a className="active" href data-content="info">
              Thông tin tài khoản
            </a>
          </li>
          <li>
            <a href data-content="my-course">
              khóa học của bạn
            </a>
          </li>
          <li>
            <a href data-content="project">
              dự án đã làm
            </a>
          </li>
          <li>
            <a href data-content="pay">
              lịch sử thanh toán
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
