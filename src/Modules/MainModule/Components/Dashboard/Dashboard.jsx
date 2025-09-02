import React from 'react'
import noProfilePic from '../../../../assets/Images/noProfilePic.png'
import { usersData } from '@/MockData/UsersData';

export default function Dashboard() {


  const splitDate = (dateStr) => {
    const [day, date] = dateStr.split(", ");
    return { day, date };
  };


  return (
    <div className='h-full w-[97%] !p-5'>
      <div className="overflow-x-auto rounded-lg border bg-white shadow-sm h-[550px] overflow-y-auto">
        <table className="w-full border-collapse">
          <thead className="bg-gray-50 text-left text-sm text-gray-500 rounded-md">
            <tr className="border !font-extralight">
              <th className="!px-2 !py-3">
                <input type="checkbox" className="h-4 w-4 !me-2" />
                Lead
              </th>
              <th className="!px-2 !py-3">Tags</th>
              <th className="!px-2 !py-3">Connected with</th>
              <th className="!px-2 !py-3">Date</th>
              <th className="!px-2 !py-3">Export</th>
            </tr>
          </thead>
          <tbody className="divide-y text-sm text-gray-700">
            {usersData.map((user, index) => (
              <tr key={index} className="hover:bg-gray-50 ">

                <td className="!px-2 !py-3 flex items-center gap-3">
                  <input type="checkbox" className="h-4 w-4" />
                  <div className="h-10 w-10 rounded-full border bg-red-200 text-red-800 font-medium flex items-center justify-center ">
                    <h4>{user.first_name[0]}{user.last_name[0]}</h4>
                  </div>
                  <div>
                    <p className="font-medium">{user.first_name} {user.last_name}</p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </div>
                </td>

                {/* Tags */}
                <td className="!px-2 !py-3">{user.tags.length == 0 ?
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-[10px] text-gray-500 !p-1">No tags added</span>
                  : <>
                    <span className={`rounded-full px-3 py-1 text-xs ${user.tags[0]=='team'? 'text-blue-600  bg-blue-100' : user.tags[0]=='summit'? 'text-orange-600  bg-orange-100' : 'text-green-600  bg-green-100'} text-[10px] !py-1 !px-1.5 !me-1 capitalize`}>{user.tags[0]}</span>
                    {user.tags.length > 1 ? <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-500 text-[10px] !p-1">{`${user.tags.length - 1}+`}</span> : ''}
                  </>
                }</td>

                {/* Connected With */}
                <td className="!px-2 !py-3 flex items-center gap-3">
                  <img
                    src={user.profile_picture ? user.profile_picture : noProfilePic}
                    alt='pp'
                    className="h-10 w-10 rounded-full"
                  />
                  <div>
                    <p className="font-medium">{user.first_name} {user.last_name}</p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </div>
                </td>

                {/* Date */}
                <td className="!px-2 !py-3">
                  <p>{splitDate(user.date).day}</p>
                  <p className="text-xs text-gray-500">{splitDate(user.date).date}</p>
                </td>

                {/* Export */}
                <td className="!px-2 !py-3">
                  <button className="flex items-center gap-1 rounded-md border px-3 py-1 text-[10px] font-medium text-gray-500 hover:bg-gray-100 !p-1">
                    <i className="fa-solid fa-arrow-up-right-from-square text-[10px] text-gray-500"></i>
                    Export
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}
