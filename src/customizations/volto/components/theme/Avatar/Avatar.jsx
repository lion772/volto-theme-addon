/**
 * Avatar component.
 * @module components/theme/Avatar/Avatar
 */
import React from 'react';

import PropTypes from 'prop-types';
import { getInitials } from '@plone/volto/helpers';
import { useDispatch } from 'react-redux';
import { Image } from 'semantic-ui-react';
import classNames from 'classnames';
import { showUserDetails } from '../../../../../../../../actions';

const defaultSize = 40;
const defaultColor = 'coral';
const defaultClassName = 'avatar circular';

const buildFallbackIcon = (radius, color, size, text, title = '') => {
  return (
    'data:image/svg+xml;base64,' +
    Buffer.from(
      `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewbox="0 0 ${size} ${size}">
              <circle cx="${radius}" cy="${radius}" r="${radius}" fill="${color}" />
              <text
                x="50%"
                y="50%"
                text-anchor="middle"
                fill="white"
                font-size="${radius}px"
                font-family="Arial"
                dy=".3em"
              >
                ${text || getInitials(title, 1)}
              </text>
            </svg>`,
    ).toString('base64')
  );
};

const Avatar = ({
  src,
  title,
  text,
  size,
  color,
  className,
  userId,
  preventDefault,
}) => {
  const radius = Math.round(size / 2);
  const dispatch = useDispatch();
  return (
    <div className={classNames(className, { link: !!userId })} title={title}>
      <Image
        src={src || 'error'}
        alt={title}
        onClick={(e) => {
          if (preventDefault) {
            e.preventDefault();
          }
          !!userId && dispatch(showUserDetails(userId));
        }}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = buildFallbackIcon(
            radius,
            color,
            size,
            text,
            title,
          );
        }}
      />
    </div>
  );
};

Avatar.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.string,
  userId: PropTypes.string,
  preventDefault: PropTypes.bool,
};

Avatar.defaultProps = {
  src: null,
  title: null,
  text: null,
  size: defaultSize,
  color: defaultColor,
  className: defaultClassName,
  userId: null,
  preventDefault: false,
};

export default Avatar;
