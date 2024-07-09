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

export default function ReactHookFormValidation() {
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
                {/* 1st box - name */}
                <div>
                    <label htmlFor="name">Name :
                        {errors.name && errors.name.type === "required" && (<span className='text-danger'>This Field Required</span>)}
                        {errors.name && errors.name.type === "minLength" && (<span className='text-danger'>Name must be at least 2 characters</span>)}
                        {errors.name && errors.name.type === "pattern" && (<span className='text-danger'>Name must not contain numbers</span>)}
                    </label>
                    <div>
                        <input
                            {...register("name", { required: true, pattern: /^[A-Za-z\s]+$/i, minLength: 2 })}
                            id="name"
                            name="name"
                            placeholder="Enter Your Name"
                            type="name"
                            className='w-100'
                        />
                    </div>
                </div>

                {/* 2nd box - email */}
                <div className="mt-3">
                    <label htmlFor="email">Email :
                        {errors.email && (<span className='text-danger'>This Field Required</span>)}
                    </label>
                    <div>
                        <input
                            {...register("email", { required: true, pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/ })}
                            id="email"
                            name="email"
                            placeholder="Enter Your Email"
                            type="email"
                            className='w-100'
                        />
                    </div>
                </div>

                {/* 3rd box - hobby, gender */}
                <div className='d-flex align-items-center gap-5 mt-3'>
                    {/* 1st box - hobby */}
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

                {/* 4th box - number */}
                <div className="mt-3">
                    <label htmlFor="number">Number :
                        {errors.number && errors.number.type === "required" && (<span className='text-danger'>This Field Required</span>)}
                        {errors.number && errors.number.type === "pattern" && (<span className='text-danger'>Invalid number format</span>)}
                        {errors.number && errors.number.type === "minLength" && (<span className='text-danger'>Number must be exactly 10 digits</span>)}
                        {errors.number && errors.number.type === "maxLength" && (<span className='text-danger'>Number must be exactly 10 digits</span>)}
                    </label>
                    <div>
                        <input
                            {...register("number", {
                                required: true,
                                pattern: {
                                    value: /^[6-9]\d{9}$/,
                                    message: "Number must start with 6, 7, 8, or 9"
                                },
                                minLength: {
                                    value: 10,
                                    message: "Number must be exactly 10 digits"
                                },
                                maxLength: {
                                    value: 10,
                                    message: "Number must be exactly 10 digits"
                                }
                            })}
                            type='text'
                            id='number'
                            name='number'
                            className='w-100'
                            placeholder='Enter Your Number'
                        />
                    </div>
                </div>

                {/* 5th box - select */}
                <div className="mt-3">
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

                {/* 6th box - password */}
                <div className="mt-3">
                    <div>
                        <label htmlFor="Password">Password :
                            {errors.password && errors.password.type === "required" && (<span className='text-danger'>This Field Required</span>)}
                            {errors.password && errors.password.type === "minLength" && (<span className='text-danger'>Password must be at least 8 characters</span>)}
                            {errors.password && errors.password.type === "pattern" && (<span className='text-danger'>Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character</span>)}
                        </label>
                    </div>
                    <input
                        {...register("password", { required: true, minLength: 8, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8}$/ })}
                        id="Password"
                        name="password"
                        placeholder="Enter Your Password"
                        type="password"
                        className='w-100'
                    />
                </div>

                <button type='submit' className='w-100 text-white bg-danger border-0 mt-3'>Submit</button>
            </form>
        </div>
    )
}
