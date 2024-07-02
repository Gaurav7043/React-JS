import React from 'react'
import { toast } from 'react-toastify'
import { Controller, useForm } from 'react-hook-form'
import { Select } from 'antd'

const genderOption = ["male", "female"]

const selectOption = [
    { value: "Select", label: "Select" },
    { value: "Cricket", label: "Cricket" },
    { value: "Chess", label: "Chess" },
    { value: "Lodu", label: "Lodu" },
    { value: "Volly Ball", label: "Volly Ball" },
]

const hobbyOption = ["10th", "12th", "BCA"]

export default function ReactHookForm() {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors }
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        toast.success("SuccessFully")
    }

    return (
        <div>
            <h3 className='text-center my-3'>Registration Form</h3>
            <form className='w-50 border m-auto p-3 mt-3' onSubmit={handleSubmit(onSubmit)}>
                {/* 1st box - email, hobby */}
                <div className='d-flex align-items-center gap-5'>
                    {/* 1st box - email */}
                    <div>
                        <label htmlFor="email">Email :
                            {errors.email && (<span className='text-danger'>This Field Required</span>)}
                        </label>
                        <div>
                            <input
                                {...register("email", { required: true })}
                                id="email"
                                name="email"
                                placeholder="Enter Your Email"
                                type="email"
                                className='w-100'
                            />
                        </div>
                    </div>

                    {/* 2nd box - hobby */}
                    <div>
                        <label htmlFor='hobby'>Hobby :
                            {errors.hobby && (<span className='text-danger'>This Field Required</span>)}
                        </label>
                        <div className='d-flex align-items-center gap-3'>
                            {
                                hobbyOption?.map((e, i) => {
                                    return (
                                        <div key={i}>
                                            <input value={e} id={`hobby${e}`} type="checkbox" className='me-1'
                                                {...register("hobby", { required: true })}
                                            />
                                            <label htmlFor={`hobby-${e}`} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                {e}
                                            </label>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

                {/* 2nd box - name, gender */}
                <div className='mt-3 d-flex align-items-center gap-5'>
                    {/* 1st box - name */}
                    <div>
                        <label htmlFor="name">Name :
                            {errors.name && (<span className='text-danger'>This Field Required</span>)}
                        </label>
                        <div>
                            <input
                                {...register("name", { required: true })}
                                id="name"
                                name="name"
                                placeholder="Enter Your Name"
                                type="name"
                            />
                        </div>
                    </div>

                    {/* 2nd box - gender */}
                    <div>
                        <label htmlFor='gender'>Gender :
                            {errors.gender && (<span className='text-danger'>This Field Required</span>)}
                        </label>
                        <div className='d-flex align-items-center gap-3'>
                            {
                                genderOption?.map((e, i) => {
                                    return (
                                        <div key={i}>
                                            <input
                                                {...register("gender", { required: true })}
                                                type='radio'
                                                value={e}
                                                id={`gender - ${e}`}
                                                className='me-1'
                                            />
                                            <label htmlFor={`gender - ${e}`}>{e}</label>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                </div>

                {/* 3rd box - password, select */}
                <div className='d-flex align-items-center gap-5'>
                    {/* 1st box - password */}
                    <div>
                        <div>
                            <label htmlFor="Password">Password :
                                {errors.password && (<span className='text-danger'>This Field Required</span>)}
                            </label>
                        </div>
                        <input
                            {...register("password", { required: true })}
                            id="Password"
                            name="password"
                            placeholder="Enter Your Password"
                            type="password"
                            className='w-100'
                        />
                    </div>

                    {/* 2nd box - select */}
                    {/* <div>
                        <label htmlFor="sect" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            select
                            {errors.sect && (<span className="text-danger">This field is required</span>)}
                        </label>
                        <div>
                            <select id="sect" {...register("sect", { required: true })}>
                                <option value="">--select---</option>
                                {selectOption.map((option) => (
                                    <option key={option.value} value={option.value}>{option.label}</option>
                                ))}
                            </select>
                        </div>
                    </div> */}

                    <div>
                        <label>select
                            {errors.my && (<span className="text-danger">This field is required</span>)}
                        </label>
                        <div>
                            <Controller
                                name="my"
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        className="w-100"
                                        placeholder="Select"
                                        options={selectOption.map(item => ({
                                            value: item.value,
                                            label: item.label
                                        }))}
                                    />
                                )}
                            />
                        </div>
                    </div>
                </div>

                <button type='submit' className='w-100 text-white bg-danger border-0 mt-3'>Submit</button>
            </form>
        </div>
    )
}
