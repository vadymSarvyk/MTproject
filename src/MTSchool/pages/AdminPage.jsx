import './AdminPage.css'
import Cookies from 'js-cookie';
import LoginForm from '../elements/admin/LoginForm';
import AdminControls from '../elements/admin/AdminControls'; 

const AdminPage = () => {
    const token = Cookies.get('token'); // Получение токена из кук
  
    return (
      <div className="admin-page" style={{margin: 0, padding: 0}}>
        {!token ? <LoginForm /> : <AdminControls />}
      </div>
    );
  };

export default AdminPage