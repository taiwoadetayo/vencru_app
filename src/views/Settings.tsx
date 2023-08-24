import React, { useState } from 'react';
import {billingHistory} from '../interfaces';
import {formatDate,twoDecimalPlace} from '../helpers';



function Settings() {
  const billing_history : billingHistory[] = [
    { id: 1, invoice: 'Basic Plan - Dec 2022' , currency:'USD $', amount: 10.00, date: '2022-12-01', status: 'Paid', users: ['user-1.svg','user-2.svg','user-3.svg','user-4.svg','user-5.svg','user-1.svg','user-1.svg'] },
    { id: 1, invoice: 'Basic Plan - Nov 2022' , currency:'USD $', amount: 10.00, date: '2022-11-01', status: 'Paid', users: ['user-1.svg','user-2.svg','user-3.svg','user-4.svg','user-5.svg','user-1.svg'] },
    { id: 1, invoice: 'Basic Plan - Oct 2022' , currency:'USD $', amount: 10.00, date: '2022-10-01', status: 'Paid', users: ['user-1.svg','user-2.svg','user-3.svg','user-4.svg','user-5.svg',] },
    { id: 1, invoice: 'Basic Plan - Sep 2022' , currency:'USD $', amount: 10.00, date: '2022-09-01', status: 'Paid', users: ['user-1.svg','user-2.svg','user-3.svg'] },
    { id: 1, invoice: 'Basic Plan - Aug 2022' , currency:'USD $', amount: 10.00, date: '2022-08-01', status: 'Paid', users: ['user-1.svg','user-2.svg','user-3.svg','user-4.svg'] },
    { id: 1, invoice: 'Basic Plan - Jul 2022' , currency:'USD $', amount: 10.00, date: '2022-07-01', status: 'Paid', users: ['user-1.svg','user-2.svg','user-3.svg','user-4.svg'] },
    { id: 1, invoice: 'Basic Plan - Jun 2022' , currency:'USD $', amount: 10.00, date: '2022-06-1', status: 'Paid', users: ['user-1.svg','user-2.svg','user-3.svg'] }
  ];

  const [checkbox_sample, setCheckbox] = useState(true);
  const handleCheckbox = (e:any) =>{
    setCheckbox(e.target.checked)
  }



  return (
    <div className="flex">
        <nav className="nav-area bg-white border-r border-gray-200 h-screen overflow-hidden px-3">
          <div className='relative mb-3'>
            <img src='/logo.png' alt='logo_image' className='' style={{height:'40px'}}/>
          </div>

          <div className='relative w-full mb-8'>                          
            <svg className='absolute' style={{left:'18px', top:'14px'}}  width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 16.5L12.875 12.875M14.8333 8.16667C14.8333 11.8486 11.8486 14.8333 8.16667 14.8333C4.48477 14.8333 1.5 11.8486 1.5 8.16667C1.5 4.48477 4.48477 1.5 8.16667 1.5C11.8486 1.5 14.8333 4.48477 14.8333 8.16667Z" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <input placeholder='Search' type="email" id="email" name="email" className="mt-1 p-2 pl-12 px-5 border rounded-md focus:outline-none w-full" />
          </div>

          <ul className="font-medium">
            <li className="mb-1">
              <a href="/#!" className="block py-2 pl-2 hover:bg-gray-700 flex">
                <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 21V11H13V21M1 8L10 1L19 8V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8Z" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                <label className='ml-5'>Home</label>
              </a>
            </li>
            <li className="mb-1">
              <a href="/#!" className="block py-2 pl-2 hover:bg-gray-700 flex">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 20V10M12 20V4M6 20V14" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                <label className='ml-5'>Dashboard</label>
              </a>
            </li>
            <li className="mb-1">
              <a href="/#!" className="block py-2 pl-2 hover:bg-gray-700 flex">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 16L11 21L21 16M1 11L11 16L21 11M11 1L1 6L11 11L21 6L11 1Z" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                <label className='ml-5'>Projects</label>
              </a>
            </li>
            <li className="mb-1">
              <a href="/#!" className="block py-2 pl-2 hover:bg-gray-700 flex">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 11L12 14L22 4M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                <label className='ml-5'>Tasks</label>
              </a>
            </li>
            <li className="mb-1">
              <a href="/#!" className="block py-2 pl-2 hover:bg-gray-700 flex">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 15C4 15 5 14 8 14C11 14 13 16 16 16C19 16 20 15 20 15V3C20 3 19 4 16 4C13 4 11 2 8 2C5 2 4 3 4 3V15ZM4 15V22" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                <label className='ml-5'>Reporting</label>
              </a>
            </li>
            <li className="mb-1">
              <a href="/#!" className="block py-2 pl-2 hover:bg-gray-700 flex">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                <label className='ml-5'>Users</label>
              </a>
            </li>
          </ul>

        </nav>

        <main className="main-container bg-gray-100 p-5">
          {/* page hero section */}
          <header className='mb-5'>
            <h1 className='text-3xl leading-9 font-medium'>Settings</h1>
            <p className='text-gray-500 text-sm mb-5'>Manage your team and preferences here.</p>

            <ul className="flex justify-center divide-x divide-gray-200 font-medium text-sm bg-white rounded-lg font-small mt-2 border w-4/5 text-gray-600">
              <li className="px-3 flex-grow py-2 text-center hover:bg-gray-50">My details</li>
              <li className="px-3 flex-grow py-2 text-center hover:bg-gray-50">Profile</li>
              <li className="px-3 flex-grow py-2 text-center hover:bg-gray-50">Password</li>
              <li className="px-3 flex-grow py-2 text-center hover:bg-gray-50">Team</li>
              <li className="px-3 flex-grow py-2 text-center hover:bg-gray-50">Plan</li>
              <li className="px-3 flex-grow py-2 text-center bg-gray-50">Billing</li>
              <li className="px-3 flex-grow py-2 text-center hover:bg-gray-50">Notifications</li>
              <li className="px-3 flex-grow py-2 text-center hover:bg-gray-50">Integrations</li>
              <li className="px-3 flex-grow py-2 text-center hover:bg-gray-50">API</li>
            </ul>
          </header>


          {/* Payment method section */}
          <section className='mt-8'>
            <div className=''>
              <h2 className='text-2xl font-medium'> Payment method</h2>
              <p className='text-gray-500 text-sm mb-5'>Update your builling details and address.</p>
            </div>

            <hr />

            {/* email address area */}
            <div className='mb-5 mt-5 flex justify-between'>
              <div className=''>
                <h5 className='font-medium text-md'>Contact Email</h5>
                <p className='text-gray-500 text-sm'>Where should invoices be sent?</p>
              </div>

              <div className='w-2/3'>
                <div className='relative flex'> 
                  <div className="radio absolute top-1">
                    <input type="radio" id="radio0" name="radioOption" />
                    <label htmlFor="radio0"></label>
                  </div>
                  <div className='ml-8'>                      
                    <div className="text-gray-700 font-medium">Send to my account email</div>
                    <div className='text-gray-500 text-sm'>Olivia@untitled.com</div>
                  </div>
                </div>

                <div className='mt-3 relative'>
                  <div className="flex">
                    <div className="radio absolute top-1">
                      <input type="radio" id="radio1" name="radioOption" checked />
                      <label htmlFor="radio1"></label>
                    </div>

                    <div className='ml-8 w-full'> 
                      <p className="text-gray-700 font-medium">Send to my alternative email</p>

                      <div className='relative'>                          
                        <svg className='absolute' style={{left:'18px', top:'14px'}} width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.3333 3.00001C18.3333 2.08334 17.5833 1.33334 16.6667 1.33334H3.33332C2.41666 1.33334 1.66666 2.08334 1.66666 3.00001M18.3333 3.00001V13C18.3333 13.9167 17.5833 14.6667 16.6667 14.6667H3.33332C2.41666 14.6667 1.66666 13.9167 1.66666 13V3.00001M18.3333 3.00001L9.99999 8.83334L1.66666 3.00001" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
      
                        <input value="billing@untitledui.com" type="email" id="email" name="email" className="mt-1 p-2 pl-12 px-5 border rounded-md       focus:outline-none" />
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <hr />

            {/* card area */}
            <div className='mb-5 mt-5 flex justify-between' >
              <div className='mt-5 mb-5'>
                <h5 className='font-medium text-md'>Card Details</h5>
                <p className='text-gray-400 text-xs'>Select default payment method.</p>
              </div>
              <div className='w-2/3'>
                <div className='flex p-2 relative' style={{background:'#F9F5FF', border:'2px solid #d6bbfb', width:'100%', borderRadius:'5px'}}>
                  <div className='p-2'>
                    <svg width="46" height="32" viewBox="0 0 46 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="45" height="31" rx="5.5" fill="white"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M14.3337 21.1443H11.5874L9.52795 13.0565C9.4302 12.6844 9.22265 12.3555 8.91736 12.2005C8.15546 11.811 7.3159 11.5009 6.40001 11.3446V11.0332H10.8241C11.4347 11.0332 11.8927 11.5009 11.969 12.0442L13.0375 17.8782L15.7825 11.0332H18.4525L14.3337 21.1443ZM19.979 21.1443H17.3853L19.521 11.0332H22.1147L19.979 21.1443ZM25.4703 13.8343C25.5466 13.2897 26.0045 12.9783 26.5388 12.9783C27.3784 12.9001 28.2929 13.0565 29.0562 13.4447L29.5141 11.2677C28.7509 10.9564 27.9113 10.8 27.1494 10.8C24.6321 10.8 22.8003 12.2005 22.8003 14.1443C22.8003 15.623 24.0978 16.3995 25.0137 16.8672C26.0045 17.3336 26.3862 17.645 26.3098 18.1114C26.3098 18.811 25.5466 19.1224 24.7847 19.1224C23.8688 19.1224 22.9529 18.8892 22.1147 18.4996L21.6568 20.6779C22.5726 21.0661 23.5635 21.2225 24.4794 21.2225C27.302 21.2993 29.0562 19.9001 29.0562 17.8C29.0562 15.1553 25.4703 15.0003 25.4703 13.8343ZM38.1333 21.1443L36.0739 11.0332H33.8619C33.4039 11.0332 32.946 11.3446 32.7933 11.811L28.9798 21.1443H31.6498L32.1828 19.6669H35.4633L35.7686 21.1443H38.1333ZM34.2435 13.7561L35.0054 17.5668H32.8697L34.2435 13.7561Z" fill="#172B85"/>
                    <rect x="0.5" y="0.5" width="45" height="31" rx="5.5" stroke="#F2F4F7"/>
                    </svg>
                  </div>
                  <div className='px-1'>
                    <p className='mt-1 mb-0 leading-0 font-medium text-purple-800'>Visa ending with 1234</p>
                    <p className='leading-0 text-purple-400'>Expires 06/2024</p>
                    <div className='mt-2 leading-0 text-purple-400'>Set as default <span className='ml-3 font-medium text-purple-800'>Edit</span></div>

                    {/* <input type="checkbox" className="checkbox-round absolute form-checkbox h-4 w-4 rounded-full bg-purple-500 border-purple-500 focus:border-purple-500 focus:ring focus:ring-purple-200 top-0 right-0 mt-3 mr-3" /> */}

                    <div className="round absolute top-0 right-0 mt-3 mr-4">
                      <input type="checkbox" id="checkbox0" checked={checkbox_sample} onChange={handleCheckbox} />
                      <label htmlFor="checkbox0"></label>
                    </div>
                  </div>
                </div>

                <div className='flex mt-4 p-2 relative' style={{background:'#fff', border:'1px solid #EAECF0', width:'100%', borderRadius:'5px'}}>
                  <div className='p-2'>
                    <svg width="46" height="32" viewBox="0 0 46 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="45" height="31" rx="5.5" fill="white"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M22.9053 22.4392C21.3266 23.77 19.2787 24.5733 17.0409 24.5733C12.0478 24.5733 8 20.5737 8 15.64C8 10.7062 12.0478 6.70662 17.0409 6.70662C19.2787 6.70662 21.3266 7.50995 22.9053 8.84068C24.484 7.50995 26.5319 6.70662 28.7697 6.70662C33.7628 6.70662 37.8106 10.7062 37.8106 15.64C37.8106 20.5737 33.7628 24.5733 28.7697 24.5733C26.5319 24.5733 24.484 23.77 22.9053 22.4392Z" fill="#ED0006"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M22.9053 22.4392C24.8492 20.8007 26.0818 18.3626 26.0818 15.64C26.0818 12.9173 24.8492 10.4792 22.9053 8.84067C24.484 7.50995 26.5319 6.70662 28.7697 6.70662C33.7628 6.70662 37.8106 10.7062 37.8106 15.64C37.8106 20.5737 33.7628 24.5733 28.7697 24.5733C26.5319 24.5733 24.484 23.77 22.9053 22.4392Z" fill="#F9A000"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M22.9053 22.4392C24.8492 20.8007 26.0818 18.3626 26.0818 15.64C26.0818 12.9174 24.8492 10.4793 22.9053 8.84071C20.9614 10.4793 19.7288 12.9174 19.7288 15.64C19.7288 18.3626 20.9614 20.8007 22.9053 22.4392Z" fill="#FF5E00"/>
                    <rect x="0.5" y="0.5" width="45" height="31" rx="5.5" stroke="#F2F4F7"/>
                    </svg>
                  </div>
                  <div className='px-1'>
                    <p className='mt-1 mb-0 leading-0 font-medium text-purple-800'>Mastercard ending with 1234</p>
                    <p className='leading-0 text-purple-400'>Expires 06/2024</p>
                    <div className='mt-2 leading-0 text-purple-400'>Set as default <span className='ml-3 font-medium text-purple-800'>Edit</span></div>

                    <div className="round absolute top-0 right-0 mt-3 mr-4">
                      <input type="checkbox" id="checkbox1" />
                      <label htmlFor="checkbox1"></label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Billing History Table */}
          <section>
            <div className='mb-5 mt-5 flex justify-between'>
              <h5 className='font-normal'>Billing history</h5>
              <button type='button' className='button border bg-white px-4 py-1 flex justify-center rounded'>
                  <svg width="25" height="25" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg" className='pr-2 text-sm'>
                  <path d="M6.66667 13.1667L10 16.5M10 16.5L13.3333 13.1667M10 16.5V9M17.4 14.075C18.1245 13.5655 18.6678 12.8385 18.9511 11.9993C19.2343 11.1601 19.2428 10.2525 18.9753 9.40819C18.7078 8.56386 18.1782 7.82674 17.4634 7.3038C16.7486 6.78086 15.8857 6.49931 15 6.5H13.95C13.6994 5.52323 13.2304 4.61604 12.5784 3.84674C11.9265 3.07743 11.1085 2.46605 10.186 2.05863C9.26356 1.65121 8.26071 1.45836 7.25294 1.4946C6.24518 1.53084 5.25877 1.79523 4.36797 2.26786C3.47717 2.74049 2.70519 3.40904 2.11016 4.22319C1.51513 5.03734 1.11255 5.97587 0.932723 6.96813C0.752897 7.96038 0.800514 8.9805 1.07199 9.95169C1.34346 10.9229 1.83172 11.8198 2.50001 12.575" stroke="#667085" strokeWidth="1.66667" /></svg>

                  <span className='text-xs mt-1'>Download All</span>
              </button>
            </div>

            <div className="overflow-x-auto shadow-sm border rounded-lg mt-15 mb-5">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className='text-capitalize'>
                  <tr>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 tracking-wider flex">
                        <input type="checkbox" className="form-checkbox h-15 w-15 text-indigo-600 mr-2"/>
                        <span>Invoice</span>
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 tracking-wider">
                      Users on plan
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {/* loop tr with data from table_record */}
                  {
                  billing_history.map((item,i) => (
                    <tr key={i}>
                      <td className="px-6 py-4 whitespace-no-wrap flex text-xs font-medium w-50">
                          <input type="checkbox" className="form-checkbox h-15 w-15 text-indigo-600 mr-2"/>
                          <span>{item.invoice}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap text-xs text-gray-500">{item.currency}{twoDecimalPlace(item.amount)}</td>
                      <td className="px-6 py-4 whitespace-no-wrap text-xs text-gray-500">{formatDate(item.date, 'date')}</td>
                      <td className="px-6 py-4 whitespace-no-wrap text-xs text-gray-500">
                        { item.status === 'Paid' &&
                          <label className="bg-green-100 text-green-900 font-medium rounded-lg py-1 px-3 flex paid-label">
                            <svg className='pr-1' xmlns="http://www.w3.org/2000/svg" height="1em" fill='#14532d' viewBox="0 0 512 512"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/></svg>

                            <span>Paid</span>
                          </label>
                        }
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap text-xs text-gray-500 flex">
                        { 
                          item.users.slice(0, 4).map((item,i) => (
                            <img src={'/assets/imgs/'+item} alt='user'  className='rounded-pin-image' key={i}/>
                          ))
                        }
                        { (item.users.length > 5) &&
                          <span className='rounded-pin-plus-text'>+{item.users.length - 5}</span>
                        }
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap text-xs text-gray-500">
                        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.66667 13.1667L10 16.5M10 16.5L13.3333 13.1667M10 16.5V9M17.4 14.075C18.1245 13.5655 18.6678 12.8385 18.9511 11.9993C19.2343 11.1601 19.2428 10.2525 18.9753 9.40819C18.7078 8.56386 18.1782 7.82674 17.4634 7.3038C16.7486 6.78086 15.8857 6.49931 15 6.5H13.95C13.6994 5.52323 13.2304 4.61604 12.5784 3.84674C11.9265 3.07743 11.1085 2.46605 10.186 2.05863C9.26356 1.65121 8.26071 1.45836 7.25294 1.4946C6.24518 1.53084 5.25877 1.79523 4.36797 2.26786C3.47717 2.74049 2.70519 3.40904 2.11016 4.22319C1.51513 5.03734 1.11255 5.97587 0.932723 6.96813C0.752897 7.96038 0.800514 8.9805 1.07199 9.95169C1.34346 10.9229 1.83172 11.8198 2.50001 12.575" stroke="#667085" strokeWidth="1.66667" /></svg>
                      </td>
                    </tr>
                  ))
                  }              
                </tbody>
              </table>
            </div>
          </section>
        </main>
    </div>
  );
}

export default Settings;
