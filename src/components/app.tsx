import * as React from 'react'

// typed stateless component
const App: React.StatelessComponent<{ message: string }> =
  ({ message }) => <div>{message}</div>
App.displayName = "MyApp"

export default App