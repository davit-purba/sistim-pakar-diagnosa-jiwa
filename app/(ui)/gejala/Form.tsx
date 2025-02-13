import React from 'react'
import dataService from '@/lib/service/dataService'
import { Gejala } from '@prisma/client'
import ItemGejala from '@/components/action/ItemGejala'

const Form = async () => {

    const gejalaItem = (await dataService.getGejala()) as Gejala[];

    if (!gejalaItem) {
        return null;
    }
    return (
        <div>
            <ItemGejala item = {gejalaItem}/>
        </div>
    )
}

export default Form