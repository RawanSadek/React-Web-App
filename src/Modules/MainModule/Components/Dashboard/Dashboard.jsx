import React, { useState } from 'react'
import noProfilePic from '../../../../assets/Images/noProfilePic.png'
import { usersData } from '@/MockData/UsersData';
import { Tabs, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, ListFilter } from 'lucide-react';
import { Input } from "@/components/ui/input"
import noData from '../../../../assets/Images/noData.png'

export default function Dashboard() {


  const splitDate = (dateStr) => {
    const [day, date] = dateStr.split(", ");
    return { day, date };
  };

  let [hideSearch, setHideSearch] = useState(true);

  let [searchNameInput, setSearchNameInput] = useState("");
  let [searchEmailInput, setSearchEmailInput] = useState("");

  const filteredData = usersData.filter((user) => {
    const fullName = `${user.first_name} ${user.last_name}`.toLowerCase();
    const email = user.email.toLowerCase();
    return (
      fullName.includes(searchNameInput.toLowerCase()) &&
      email.includes(searchEmailInput.toLowerCase())
    );
  });

  return (

    <div className='h-full w-[97%] !p-5'>

      <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center !mb-5'>
        <Tabs defaultValue="leads" className="lg:w-[70%] xl:w-[45%] bg-gray-300 !mb-2">
          <TabsList className="bg-gray-100 !p-1 rounded-lg w-full flex">
            <TabsTrigger
              value="leads"
              className="w-1/3 data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-black rounded-sm !py-0.5 text-gray-500 transition" >
              Leads
            </TabsTrigger>
            <TabsTrigger
              value="quality"
              className="w-1/3 data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-black rounded-sm !py-0.5 text-gray-500 transition" >
              Lead Quality Score
            </TabsTrigger>
            <TabsTrigger
              value="leaderboard"
              className="w-1/3 data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-black rounded-sm !py-0.5 text-gray-500 transition" >
              Leaderboard
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="btns flex">
          <Button onClick={() => setHideSearch(!hideSearch)} className='text-gray-500 !px-2 shadow-sm hover:text-gray-500' variant="outline"><ListFilter /> Filter</Button>
          <Button className='text-gray-500 !px-2 shadow-sm !ms-2 hover:text-gray-500' variant="outline">Export <ArrowUpRight /></Button>
        </div>

      </div>

      <div hidden={hideSearch} className='flex flex-col lg:flex-row justify-between items-center gap-3 lg:gap-8  !mb-5'>
        <Input onChange={(e) => setSearchNameInput(e.target.value)} value={searchNameInput} type="text" placeholder="Search by name" className='!px-5 w-full ' />
        <Input onChange={(e) => setSearchEmailInput(e.target.value)} value={searchEmailInput} type="text" placeholder="Search by email" className='!px-5 w-full ' />

      </div>

      <div className="overflow-x-auto overflow-y-hidden  bg-white h-[500px]">


        {/* for large screens */}
        <div className=' text-gray-500 rounded-md border border-gray-100 overflow-hidden hidden lg:block'>
          <table className="w-full">
            <thead className="bg-gray-100 text-left text-sm rounded-md rounded-b-xl sticky top-0 z-10">
              <tr className="!font-extraligh">
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
          </table >
        </div>

        <div className="overflow-y-auto h-[450px] !mt-5 rounded-md border hidden lg:block">
          <table className="w-full ">
            <tbody className="divide-y text-sm text-gray-700 ">
              {filteredData.length == 0 ?
                <>
                  <img src={noData} alt="No Data" className='h-40 !mx-auto !mt-20 opacity-70' />
                  <h3 className='text-center font-bold text-lg text-gray-500'>No users found!</h3>
                </>
                :
                filteredData.map((user, index) => (
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

                    <td className="!px-2 !py-3">{user.tags.length == 0 ?
                      <span className="rounded-full bg-gray-100 px-3 py-1 text-[10px] text-gray-500 !p-1">No tags added</span>
                      : <>
                        <span className={`rounded-full px-3 py-1 text-xs ${user.tags[0] == 'team' ? 'text-blue-600  bg-blue-100' : user.tags[0] == 'summit' ? 'text-orange-600  bg-orange-100' : 'text-green-600  bg-green-100'} text-[10px] !py-1 !px-1.5 !me-1 capitalize`}>{user.tags[0]}</span>
                        {user.tags.length > 1 ? <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-500 text-[10px] !p-1">{`${user.tags.length - 1}+`}</span> : ''}
                      </>
                    }</td>

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

                    <td className="!px-2 !py-3">
                      <p>{splitDate(user.date).day}</p>
                      <p className="text-xs text-gray-500">{splitDate(user.date).date}</p>
                    </td>

                    <td className="!px-2 !py-3">
                      <button className="flex items-center gap-1 rounded-md border px-3 py-1 text-[10px] font-medium text-gray-500 hover:bg-gray-100 !p-1">
                        <i className="fa-solid fa-arrow-up-right-from-square text-[10px] text-gray-500"></i>
                        Export
                      </button>
                    </td>
                  </tr>
                ))
              }

            </tbody>
          </table>
        </div>


        {/* For small screens */}
        <div className="lg:hidden overflow-y-auto h-[450px] !p-3">
          {filteredData.map((user, index) => (
            <div key={index} className="flex flex-col gap-3 hover:bg-gray-50 border rounded-md shadow-lg !mt-5 !p-2">
              {/* Lead */}
              <div className="flex items-center justify-between  md:!px-10 !py-2 ">
                <div>
                  <p className="text-sm md:text-lg font-semibold text-gray-400">Lead:</p>
                </div>

                <div className='flex items-center gap-2'>
                  <input type="checkbox" className="md:h-4 md:w-4" />
                  <div className="h-8 w-8 md:h-10 md:w-10 rounded-full text-sm md:text-lg border bg-red-200 text-red-800 font-medium flex items-center justify-center">
                    {user.first_name[0]}{user.last_name[0]}
                  </div>
                  <div>
                    <p className="font-medium text-sm md:text-lg">{user.first_name} {user.last_name}</p>
                    <p className="text-[10px] md:text-xs text-gray-500">{user.email}</p>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex items-center justify-between gap-3 md:!px-10 !py-2 ">
                <span className="text-sm md:text-lg font-semibold text-gray-400">Tags:</span>
                <div className="mt-1">
                  <div className="!px-2 !py-3">{user.tags.length == 0 ?
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-[10px] text-gray-500 !p-1">No tags added</span>
                    : <>
                      <span className={`rounded-full px-3 py-1 text-xs ${user.tags[0] == 'team' ? 'text-blue-600  bg-blue-100' : user.tags[0] == 'summit' ? 'text-orange-600  bg-orange-100' : 'text-green-600  bg-green-100'} text-[10px] !py-1 !px-1.5 !me-1 capitalize`}>{user.tags[0]}</span>
                      {user.tags.length > 1 ? <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-500 text-[10px] !p-1">{`${user.tags.length - 1}+`}</span> : ''}
                    </>
                  }</div>
                </div>
              </div>

              {/* Connected With */}
              <div className="flex items-center justify-between gap-3 md:!px-10 !py-2 ">
                <span className="text-sm md:text-lg font-semibold text-gray-400">Connected with:</span>
                <div className="flex items-center gap-3 mt-1">
                  <img src={user.profile_picture || noProfilePic} alt="pp" className="h-8 w-8 md:h-10 md:w-10 rounded-full" />
                  <div>
                    <p className="font-medium">{user.first_name} {user.last_name}</p>
                    <p className="text-[10px] md:text-xs text-gray-500">{user.email}</p>
                  </div>
                </div>
              </div>

              {/* Date */}
              <div className="flex items-center justify-between gap-3 md:!px-10 !py-2 ">
                <span className="text-sm md:text-lg font-semibold text-gray-400">Date:</span>
                <p className="text-xs md:text-lg">{splitDate(user.date).day} - {splitDate(user.date).date}</p>
              </div>

              {/* Export */}
              <div className="flex items-center justify-center gap-3 !px-10 !py-2 ">
                <button className="!mt-2 flex items-center gap-1 rounded-md border !px-3 !py-1 text-[10px] font-medium text-gray-500 hover:bg-gray-100">
                  <i className="fa-solid fa-arrow-up-right-from-square text-[10px] text-gray-500"></i>
                  Export
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

    </div>
  )
}
