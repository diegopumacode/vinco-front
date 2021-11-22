import React from 'react'
import { useMutation } from 'react-query'
import { createUser } from '../api'
import UserForm from '../components/UserForm'

export default function CreateUser() {

    const { mutateAsync, isLoading } = useMutation(createUser)

    const onFormSubmit = async(data) => {
        try {
            let response = await mutateAsync({ ...data })
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <UserForm onFormSubmit={onFormSubmit} isLoading={isLoading} />
        </div>
    )
}
