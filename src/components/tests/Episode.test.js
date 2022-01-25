import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Episode from './../Episode';

const testEpisode = {
    id: 15,
    image: 'string',
    name: 'Coco',
    season: 4,
    number: 7,
    summary: 'A good episode',
    runtime: 58,
  }

  const testEpisodeWithoutImg = {
    id: 15,
    image: null,
    name: 'Coco',
    season: 4,
    number: 7,
    summary: 'A good episode',
    runtime: 58,
  }

test("renders without error", () => {
    render(<Episode episode={testEpisode}/>)
});

test("renders the summary test passed as prop", ()=>{
    render(<Episode episode={testEpisode}/>);
    const summary = screen.queryByText(/a good episode/i);
    expect(summary).toBeInTheDocument();
    expect(summary).toBeTruthy();
    expect(summary).toHaveTextContent(/a good episode/i);
});

test("renders default image when image is not defined", ()=>{
    render(<Episode episode={testEpisodeWithoutImg}/>);
    const image = screen.queryByAltText('https://i.ibb.co/2FsfXqM/stranger-things.png');
    console.log(image)
    expect(image).toBeInTheDocument();
});
