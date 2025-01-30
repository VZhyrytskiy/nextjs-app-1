import Image from 'next/image';
import { AddToCart, BreadCrumbs, ProductRating  } from '@/components/single-product';
import FavoriteToggleButton from '@/components/products/FavoriteToggleButton';
import { fetchSingleProduct } from '@/utils/actions';
import { formatCurrency } from '@/utils/format';

async function SingleProductPage({params}: {params: {id: string}}) {
    const product = await fetchSingleProduct(params.id);
    const { name, price, image, company, description, id } = product; 
    const dollarsAmount = formatCurrency(price);


    return (
        <section>
            <BreadCrumbs name={name} />
            <div className='mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16'>
                {/* IMAGE FIRST COL */}
                <div className='relative h-full'>
                    <Image src={image} alt={name} fill sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' priority className='w-full rounded object-cover' />
                </div>
                {/* PRODUCT INFO SECOND COL */}
                <div>
                    <div className='flex gap-x-8 item-center'>
                        <h1 className='capitalize text-3xl font-bold'>{name}</h1>
                        <FavoriteToggleButton productId={id} />
                    </div>
                    <ProductRating productId={id} />
                    <h4 className='text-xl mt-2'>{company}</h4>
                    <p className='mt-3 text-md bg-muted inline-block p-2 rounded'>
                        {dollarsAmount}
                    </p>
                    <p className='mt-6 leading-8 text-muted-foreground'>
                        {description}
                    </p>
                    <AddToCart productId={id} />
                </div>
            </div>
        </section>
  )
}

export default SingleProductPage;