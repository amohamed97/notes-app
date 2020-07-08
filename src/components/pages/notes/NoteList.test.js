import React from 'react';
import { shallow } from 'enzyme';
import NoteList from './NoteList';
import axios from 'axios';

it("Test if API GET request is made in NoteList", async () =>{
    axios.get.mockResolvedValueOnce({data: [
        {id: 1, title: "Hello, World"},
        {id: 2, title: "Bye, World"}
        ]})

    const wrapper = shallow(<NoteList/>)
    expect(axios.get).toHaveBeenCalledTimes(1);

})