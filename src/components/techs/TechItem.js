import React from 'react'
import PropTypes from 'prop-types';
// import LogItem from '../logs/LogItem';
import { connect } from 'react-redux';
import { deleteTech } from '../../actions/techAction';
import M from 'materialize-css/dist/js/materialize';

const TechItem = ({tech, deleteTech}) => {

    const onDelete = () => {
        deleteTech(tech.id);
        M.toast({html: 'Technician Removed'})
    }

    return (
        <li className="collection-item">
            <div>
                {tech.firstName} {tech.lastName}
                <a 
                    href="#!" 
                    className="secondary-content"
                    onClick={onDelete}    
                >
                    <i className="material-icons grey-text">delete</i>
                </a>
            </div>
        </li>
    )
}

TechItem.propTypes = {
    tech: PropTypes.object.isRequired,
    deleteTech: PropTypes.func.isRequired,
}

export default connect(null, {deleteTech}) (TechItem);
