import React from "react"
import "./App.css"
import FragmentDemo from "./components/FragmentDemo"
import Table from "./components/Table"
import PureComp from "./components/PureComp"
import ParentComp from "./components/ParentComp"
import RefsDemo from "./components/RefsDemo"
import FocusInput from "./components/FocusInput"
import FRParentInput from "./components/FRParentInput"
import PortalDemo from "./components/PortalDemo"
import Hero from "./components/Hero"
import ErrorBoundary from "./components/ErrorBoundary"
import ClickCounter from "./components/ClickCounter"
import HoverCounter from "./components/HoverCounter"
import ClickCounterTwo from "./components/ClickCounterTwo"
import HoverCounterTwo from "./components/HoverCounterTwo"
import User from "./components/User"
import Counter from "./components/Counter"
import ComponentC from "./components/ComponentC"
import { UserProvider } from "./components/userContext"

function App() {
  return (
    <div className="App">
      <UserProvider value="Praveen">
        <ComponentC />
      </UserProvider>
      {/* <Counter>
        {(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      </Counter>

      <Counter>
        {(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      </Counter> */}
      {/* <ClickCounterTwo />
      <HoverCounterTwo />
      <User render={(isLoggedIn) => (isLoggedIn ? "Praveen" : "Guest")} /> */}
      {/* <ClickCounter name="Praveen" />
      <HoverCounter /> */}
      {/* <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Superman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary> */}
      {/* <PortalDemo /> */}
      {/* <FRParentInput /> */}
      {/* <FocusInput /> */}
      {/*<RefsDemo />*/}
    </div>
  )
}

export default App
