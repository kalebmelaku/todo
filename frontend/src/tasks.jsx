/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import {AiFillDelete, AiFillEdit} from 'react-icons/Ai';
export default function Task(props){
    const {task, id} = props;
    return(
        <ul>
            <li className="flex align-center justify-between mb-3">
                <p>{task.text}</p>
                <div className='flex'>
                <a className="mr-3 text-xl" href=''><AiFillEdit/></a>
                <a className='text-red-500 text-xl' href=""><AiFillDelete/></a>
                </div>
            </li>
        </ul>
    )
}

Task.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    }).isRequired,
  };