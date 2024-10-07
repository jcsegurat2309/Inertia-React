import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import { useState } from 'react';

export default function Index({title, subtitle}) {
    // const [message, setMessage] = useState('');
    // const [errors , setErrors] =  useState({});
    // const [processing, setProcessing] = useState(false);
    const {data, setData, post, reset, errors, processing} = useForm({
        message : '',

    })

    function handleSubmit(event){
        event.preventDefault();
        post(route('chirps.store'),{
            onSuccess: (res)=> reset(),
        });
    }

    // function handleSubmit(event){
    //     event.preventDefault();
    //     setProcessing(true);
    //     axios.post(route('chirps.store'),{message})
    //         .then((res)=> {
    //             setMessage('');
    //             setErrors({});
    //         }).catch((error) => {
    //             if(error.response.status === 422){
    //                 setErrors(error.response.data.errors);
    //                 return;
    //             }
    //         }).finally(() => {
    //             setProcessing(false);
    //         });
    // }

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    {title}
                </h2>
            }
        >
            <Head title={title} />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <form onSubmit={handleSubmit}>
                                <textarea placeholder='Que estas pensando?'
                                    className='block w-full rounded-md border-gray-600 bg-gray-900 shadow-lg mb-2'
                                    value={data.message}
                                    onChange={(e) => setData('message', e.target.value)}
                                ></textarea>
                                <InputError message={errors.message}></InputError>
                                <PrimaryButton disabled={processing}>
                                    {processing ? 'Enviando...': 'Chirps'}
                                </PrimaryButton>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
