import { useState } from 'react'
import * as Models from '../../server/common/allModels'


function addAMember(){
    const [member, addMember] = useState('')

    // something about a change handler here

    return (
        <>
        <form>
            <label htmlFor="addName"></label>
            <input id="addName" name="" type=""></input>
            <label htmlFor="addNickname"></label>
            <input id="addNickname" name="" type=""></input>
            <label htmlFor="addPosition"></label>
            <input id="addPosition" name="" type=""></input>
            <label htmlFor=""></label>
            <input id="addImage" name="" type=""></input>
            <label htmlFor=""></label>
            <input id="addImage" name="" type=""></input>
        </form>
        </>
    )
}