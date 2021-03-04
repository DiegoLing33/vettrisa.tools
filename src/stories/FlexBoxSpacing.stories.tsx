import {Story} from "@storybook/react";
import React from "react";
import {FlexBoxSpacing, FlexBoxSpacingProps} from "../flex/FlexBoxSpacing";
import {FlexBox} from "../flex/FlexBox";

export default {
	title: "Flex Box Spacing",
	type: FlexBoxSpacing,
}

const PrimaryTemplate: Story<FlexBoxSpacingProps> = ((args) => {

	return (
		<>
			<FlexBoxSpacing {...args} style={{backgroundColor: '#eee'}}>
				<FlexBox width={400} style={{backgroundColor: 'red'}}>1</FlexBox>
				<FlexBox width={400} style={{backgroundColor: 'green'}}>2</FlexBox>
				<FlexBox width={400} style={{backgroundColor: 'red'}}>3</FlexBox>
				<FlexBox width={400} style={{backgroundColor: 'blue'}}>4</FlexBox>
				<FlexBox width={400} style={{backgroundColor: 'cyan'}}>5</FlexBox>
			</FlexBoxSpacing>
		</>)
});

export const Primary = PrimaryTemplate.bind({});

Primary.args = {
	gap: 8
};