"use client"
import React from 'react';
import {useState, Fragment} from "react";
import Image from "next/dist/client/legacy/image";
import {useRouter} from "next/navigation";
import {Listbox, Transition} from "@headlessui/react";
import {CustomFilterProps} from "../types/index";

const CustomFilter = ({title, options}: CustomFilterProps) => {
    const [selected, setSelected] = useState(options[0])
    return (
        <div className="w-fit">
            <Listbox
                value={selected}
                onChange={(e) => setSelected(e)}
            >
                <div className="relative w-fit z-10">
                    <Listbox.Button className="custom-filter__btn">
                        <span className="block truncate">{selected.title}</span>
                        <Image
                            src='/chevron-up-down.svg'
                            width={20}
                            height={20}
                            alt="chevron"/>
                    </Listbox.Button>
                    <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition ease-in duration-100"
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <Listbox.Options className="custom-filter__options">
                            {options.map((option) => (
                                <Listbox.Option
                                    key={option.title}
                                    value={option}
                                    className={({active}) => `relative select-none py-2 px-4 cursor-default
                                        ${active ? 'bg-primary-blue text-white' : 'text-gray-500'}` }
                                >
                                    {({selected}) => (
                                        <span>
                                            {option.title}
                                        </span>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    );
};

export default CustomFilter;
