import React from 'react';
import { Layer, Stage, Wedge, Group, Text } from 'react-konva';
import Piece from './Piece'

export default (props) => {
    const width = 800;
    const height = 520;
    const param = {
        x: width - 165,
        y: height / 2,
        rotation: 330,
        radius: 30,
        angle: 60,
        fill: '#BC5506',
        stroke: '#7F4F2A',
        strokeWidth: 4
    }
    const textParametres = {
        x: width - 120,
        y: height / 2 - 15,
        text: props.word,
        fontFamily: 'Arial',
        fontSize: 30
    }
    return (
        <Stage width={width} height={height}>
            <Layer>
                <Group>
                    {props.list.map(item => <Piece key={item.id} wh={{ width: width, height: height }} param={item} />)}
                    <Wedge {...param} /><Text {...textParametres} />
                </Group>
            </Layer>
        </Stage>
    )
}