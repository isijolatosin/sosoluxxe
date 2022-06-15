import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/home-page'
import Register from './pages/register'
import Login from './pages/login'
import NotFound from './pages/error'
import Canceled from './pages/canceled'
import Success from './pages/success'
import Management from './pages/management'
import Brazilian from './pages/brazilian'
import Vietnamese from './pages/vietnamese'
import Indian from './pages/indian'
import Cart from './pages/cart'
import Account from './pages/account'

function App() {
	return (
		<Routes>
			<Route exact path="/register" element={<Register />} />
			<Route exact path="/login" element={<Login />} />
			<Route exact path="/canceled" element={<Canceled />} />
			<Route exact path="/success" element={<Success />} />
			<Route exact path="/admin-portal" element={<Management />} />
			<Route exact path="/all-brazilian" element={<Brazilian />} />
			<Route exact path="/all-vietnamese" element={<Vietnamese />} />
			<Route exact path="/all-indian" element={<Indian />} />
			<Route exact path="/user-cart/:userId" element={<Cart />} />
			<Route exact path="/user-account" element={<Account />} />
			<Route exact path="*" element={<NotFound />} />
			<Route exact path="/" element={<HomePage />} />
		</Routes>
	)
}

export default App
