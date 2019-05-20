import React from 'react'

import { List, InputItem, Radio, WhiteSpace, Button } from 'antd-mobile'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      type: 'genuis'
    }
  }

  render () {
    const RadioItem = Radio.RadioItem
    return (
      <div>
        <List>
          <InputItem>用户</InputItem>
          <WhiteSpace />
          <InputItem>密码</InputItem>
          <WhiteSpace />
          <InputItem>确认密码</InputItem>
          <WhiteSpace />
          <RadioItem checked={this.state.type === 'genuis'}>
            genuis
          </RadioItem>
          <WhiteSpace />
          <RadioItem checked={this.state.type === 'boss'}>
            boss
          </RadioItem>
          <WhiteSpace />
          <Button type="primary">注册</Button>
        </List>
      </div>
    )
  }
}

export default Login
