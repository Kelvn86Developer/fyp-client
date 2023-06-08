import React, { useContext, useEffect } from 'react'
import AccountInfo from '../../components/AccountInfo'
import AccountImage from '../../components/AccountImage';
import Loader from '../../components/Loader'
import AuthContext from '../../context/auth/authContext';

const AccountSettings = ({ student }) => {
  const authContext = useContext(AuthContext);
  const { getUser, isLoaded, isAuthenticated, user } = authContext;
  useEffect(() => {
    if(isLoaded && isAuthenticated){

    }else{
      getUser("kelvndavd86@gmail.com", "IMC/BIT/2012777");
    }
    
  }, []);
  if (!isLoaded && !isAuthenticated) {
    return <Loader />
  } else {
    return (
      <div className='w-full shadow-md pl-4 pt-2 pb-2'>
        <div className="header text-main-400 mt-2 mb-3 text-2xl font-semibold">
          <h1>Account settings</h1>
        </div>
        <div className="left-right-containers flex gap-8">
          <AccountInfo student={user} type="student"/>
          <AccountImage />
        </div>
      </div>
    )
  }

}

AccountSettings.defaultProps = {
  student: {
    id: "12HBmi",
    regNumber: "IMC/BIT/2012777",
    email: "kelvndavd86@gmail.com",
    fullName: "Kelvin D Mahundi",
    course: "Bsc In Information Technology",
    year: "3",
    stream: "Sys Dev",
    modules: [
      {
        id: "1YmIyTVdErYbG",
        title: "Fundamentals of blockchain",
        code: "ITU/CSU 08207",
        lecturer: "Qadry, S.F "
      },
      {
        id: "2PoiuytTVdErYbG",
        title: "Social Networking",
        code: "ITU/CSU 08215",
        lecturer: "Omar, Z "
      },
      {
        id: "2PoyTVd",
        title: "Information system auditing",
        code: "ITU 08211",
        lecturer: "Shiliba, G (Mr)"
      }
    ]

  }



}

export default AccountSettings