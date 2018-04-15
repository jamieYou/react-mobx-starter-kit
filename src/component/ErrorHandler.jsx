import { Component } from 'react'

export default class ErrorHandler extends Component {
  props: {
    children: any,
    onError?: Error => any,
  }

  componentDidCatch(error) {
    const { onError } = this.props
    if (onError) return onError(error)
    setTimeout(() => {
      throw error
    }, 0)
    throw error
  }

  render() {
    return this.props.children
  }
}
