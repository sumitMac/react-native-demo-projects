import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
function MyButton (props) {
return (
<TouchableOpacity onPress={props.onPress}>
<Text>{props.label}</Text>
</TouchableOpacity>
);
}
export default MyButton;