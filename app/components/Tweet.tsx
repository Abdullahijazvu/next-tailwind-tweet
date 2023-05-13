import Link from 'next/link';
import React from 'react';
import {GoKebabHorizontal} from "react-icons/go"
import {FaRegComment} from "react-icons/fa"
import {FaRetweet} from "react-icons/fa"
import {AiOutlineHeart} from "react-icons/ai"
import {AiOutlineUpload} from "react-icons/ai"
import {FiBarChart2} from "react-icons/fi"

const Tweet = () => {
    return (
        <div className='max-w-xl my-24 mx-auto p-3 border bg-white flex'>
            <img className='h-12 w-12 rounded-full mr-3' src="/favicon.ico" alt="Favicon" />
            <div className='w-full'>
                <div className='flex'>
                <div className='flex'>
                    <Link href={"https://twitter.com/itsabdullahijaz"}>
                    <strong className='text-gray-800 mr-1'>Abdullah Ijaz</strong>
                    <span className='text-gray-500 mr-1'>@itsabdullahijaz</span>
                    </Link>
                    <span className='text-gray-500 mr-1'>&middot;</span>
                    <span className='text-gray-500'>Mar 18</span>
                </div>
                <div className='ml-auto'>
                    <GoKebabHorizontal/>
                </div>
            </div>
            <div>
                You are amazing if you take time to comment on a tweet or blog post that has helped you!
            </div>
            <div className='mt-2 flex justify-between'>
                <div className='flex items-center'>
                    <FaRegComment className='mr-2 text-gray-600'/>
                    <span className='mr-2 text-gray-600'>20</span>
                </div>
                <div className='flex items-center'>
                    <FaRetweet className='mr-2 text-gray-600'/>
                    <span className='mr-2 text-gray-600'>17</span>
                </div>
                <div className='flex items-center'>
                    <AiOutlineHeart className='mr-2 text-gray-600'/>
                    <span className='mr-2 text-gray-600'>259</span>
                </div>
                <div className='flex items-center'>
                    <AiOutlineUpload className='mr-2 text-gray-600'/>
                </div>
                <div className='flex items-center'>
                    <FiBarChart2 className='mr-2 text-gray-600'/>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Tweet;