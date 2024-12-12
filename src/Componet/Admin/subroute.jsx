import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import City from './City'
import State from './State';
import Foodreq from './Foodrequests'
import Listfoods from './Listfoods'
import Regfood from './RegFoods'
import Reports from './Reports'
import SearchList from './Searchlist'
import AdminNav from './AdminNav'
function subroute() {
  return (
    <div>
        <div className='flex'>
        <AdminNav />
        <div className="flex-[20px]">
      <Routes>      
        <Route path='/admin/adminNav/dashboard' element={<Dashboard/>}></Route>
        <Route path='/admin/adminNav/city' element={<City/>}></Route>
        <Route path='/admin/adminNav/state' element={<State/>}></Route>
        <Route path='/admin/adminNav/foodreq' element={<Foodreq/>}></Route>
        <Route path='/admin/adminNav/listfoods' element={<Listfoods/>}></Route>
        <Route path='/admin/adminNav/regfoods' element={<Regfood/>}></Route>
        <Route path='/admin/adminNav/reports' element={<Reports/>}></Route>
        <Route path='/admin/adminNav/searchlist' element={<SearchList/>}></Route>      
      </Routes>
      </div>
      </div>
    </div>
  )
}

export default subroute
