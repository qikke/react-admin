import React from 'react'
import axios from 'axios'
import { WingBlank, Card } from 'antd-mobile'

export default class Boss extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }
  componentDidMount () {
    axios.get('/user/list?type=genius')
      .then(res => {
        if (res.data.code === 0) {
          this.setState({
            data: res.data.data
          })
        }
      })
  }

  render () {
    console.log(this.state.data)
    return (
      <WingBlank>
        {this.state.data.map(v => (
          v.avatar ? (
            <Card key={v._id}>
              <header
                title={v.user}
                thumb={require(`../../assets/img/${v.avatar}.png`)}
                extra={<span>{v.title}</span>}
              ></header>
              <body>
                {v.desc}
              </body>
            </Card>
          ) : null
        ))}
      </WingBlank>
    )
  }
}