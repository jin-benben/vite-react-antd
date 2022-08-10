import { Button, Rate } from 'antd'
import { Link } from 'react-router-dom'

const about = () => {
  return (
    <div>
      <Button>你好你好</Button>
      <Link to="/news">新闻</Link>
      <Rate />
    </div>
  )
}

export default about