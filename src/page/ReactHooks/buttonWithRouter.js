import React from 'react'
import { withRouter, Route, useHistory } from 'react-router-dom'
import { Button } from 'antd'

//方法1.
// export const ButtonWithRouter = withRouter(({ history }) => {
//   console.log('history', history)
//   return (
//     <Button
//       type='default'
//       onClick={() => { history.push('/new-location') }}
//     >
//       Click Me!
//     </Button>

//   )
// })

//方法2.
// const ButtonWithRouter = (props) => {
//   console.log('props', props)
//   return (
//     <Button
//       type='default'
//       onClick={() => { props.history.push('/new-location') }}
//     >
//       Click Me!
//     </Button>

//   )
// }

// export default withRouter(ButtonWithRouter)

// 方法3.
// export const ButtonWithRouter = () => (
//   <Route render={({ history }) => {
//     console.log('history', history)
//     return (
//       <button
//         type='button'
//         onClick={() => { history.push('/new-location') }}
//       >
//         Click Me!
//       </button>
//     )
//   }} />
// )

// 方法四
export const ButtonWithRouter = () => {
  const history = useHistory();
  console.log('history', history)
  return (
    <button
      type='button'
      onClick={() => { history.push('/new-location') }}
    >
      Click Me!
    </button>
  )
}