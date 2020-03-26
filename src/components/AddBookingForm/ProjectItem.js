import React from 'react';
import PropTypes from 'prop-types';

import SelectedItem from './SelectedItem';
import Item from './Item';
import icon from '../../images/bag.svg';
const ProjectItem = props => {
  const { onDisabled, src, onChangeItem } = props;
  return (
    <SelectedItem title="Project" src={icon}>
      <Item
        onDisabled={onDisabled}
        type="Project"
        makeIcon
        src={src}
        onChangeItem={onChangeItem}
      >
        {props.children}
      </Item>
    </SelectedItem>
  );
};

ProjectItem.propTypes = {
  onDisabled: PropTypes.func,
  src: PropTypes.string,
  onChangeItem: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

export default ProjectItem;