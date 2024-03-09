import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

const NavButton = ({ isActive, image, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        style={
            {   opacity: isActive ? 1 : 0.5, 
                width: 30,
                height: 30,
                justifyContent: 'center',
            }} // Change this to your preferred styling
        source={image}
      />
    </TouchableOpacity>
  );
};

export default NavButton;