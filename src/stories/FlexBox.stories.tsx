import {FlexBox, FlexBoxProps, FXAlign, FXJustify} from "../flex/FlexBox";
import {Story} from "@storybook/react";
import React from "react";

export default {
	title: "Flex Box",
	type: FlexBox,
}

const PrimaryTemplate: Story<FlexBoxProps> = ((args: FlexBoxProps) =>
	<FlexBox {...args} style={{backgroundColor: 'grey'}}>
		<div style={{backgroundColor: 'red'}}>1</div>
		<div style={{backgroundColor: 'green'}}>1</div>
	</FlexBox>);

export const Primary = PrimaryTemplate.bind({});

Primary.args = {
	width: 300,
	height: 300,
	justify: FXJustify.spaceAround,
	align: FXAlign.center,
};