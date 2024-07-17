import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilValue } from 'recoil'
import {todosAtomFamily} from './store/atoms/atoms'

function App() {

  return <RecoilRoot>
    <Todo id = {1}></Todo>
    <Todo id = {2}></Todo>
    <Todo id = {3}></Todo>
    <Todo id = {3}></Todo>
  </RecoilRoot>


}

function Todo({id}){
  const todoAtom= useRecoilValue(todosAtomFamily(id))
  return <div>
    <h1>{todoAtom.title}</h1>
    <h3>{todoAtom.description}</h3>
  </div>

}
export default App
