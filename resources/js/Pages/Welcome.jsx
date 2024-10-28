import { Head } from '@inertiajs/react';
import Header from "@/Components/Header/Header.jsx";

export default function Welcome({ auth }) {

    return (
        <>
            <Head title={'Welcome'}></Head>
            <Header >
                <div className={'welcome'}>
                    <div>test</div>
                    <div>test2</div>
                </div>
            </Header>
        </>
    );
}
