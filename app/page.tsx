import React from 'react'
import { Search, MapPin, Star, SlidersHorizontal } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'

export default function Home() {
  const operators = [
    {
      name: 'Blue Star Ferries',
      logo: '/api/placeholder/200/60',
      rating: 4.5,
      reviews: 1342,
      operatesIn: ['Greece'],
      vessels: 8,
      ferryTypes: ['normal'],
      popularVessels: ['Blue Star Delos', 'Blue Star Naxos'],
      description:
        'Blue Star Ferries is currently the biggest ferry company in Greece. It is a member of Attica Group, one of the most significant companies in the Greek shipping industry.',
    },
    {
      name: 'Seajets',
      logo: '/api/placeholder/200/60',
      rating: 4.3,
      reviews: 2467,
      operatesIn: ['Greece'],
      vessels: 17,
      ferryTypes: ['normal', 'high-speed'],
      popularVessels: ['WorldChampion Jet', 'Seajet 2'],
      description:
        'Seajets is the biggest company of high-speed vessels of the Aegean Sea. It is a joint venture of speedboats that was initially founded in 1989 to provide shipping services.',
    },
  ]

  return (
    <div className='container mx-auto p-6'>
      <div className='flex justify-between items-center mb-1'>
        <h1 className='text-2xl font-bold'>Ferry operators</h1>
      </div>

      <div className='text-sm text-gray-500 mb-6'>Discover the 57 ferry operators we work with</div>

      {/* Main Content */}
      <div className='space-y-6'>
        <div className='flex justify-between'>
          <div className='flex gap-2'>
            <Button variant='outline' className='gap-2'>
              <SlidersHorizontal className='text-blue-500 h-4 w-4' />
              Filters
            </Button>

            <Select defaultValue='reviews'>
              <SelectTrigger className='w-[270px]'>
                <SelectValue placeholder='Sort by' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='reviews'>Sort by: Reviews number (high first)</SelectItem>
                <SelectItem value='rating'>Sort by: Rating</SelectItem>
              </SelectContent>
            </Select>
            <div className='relative w-[100px]'>
              <Search className='absolute left-2 top-2.5 h-4 w-4 text-gray-500' />
              <Input placeholder='Search' className='pl-8' />
            </div>
          </div>
          <Button variant='outline' className='gap-2 text-blue-400'>
            <MapPin className='h-4 w-4' />
            Live Map View
          </Button>
        </div>

        {/* Operator Cards */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
          {/* Filters Section */}
          <div className='space-y-6'>
            <Card>
              <CardHeader>
                <CardTitle className='text-lg'>Filters</CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div className='space-y-2'>
                  <label className='text-sm font-medium'>Operating in</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder='Select a country' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='greece'>Greece</SelectItem>
                      <SelectItem value='italy'>Italy</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className='space-y-2'>
                  <label className='text-sm font-medium'>Ferry types</label>
                  <div className='space-y-2'>
                    <div className='flex items-center space-x-2'>
                      <Checkbox id='normal' />
                      <label htmlFor='normal' className='text-sm'>
                        Normal ferries
                      </label>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <Checkbox id='high-speed' />
                      <label htmlFor='high-speed' className='text-sm'>
                        High-speed ferries
                      </label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className='md:col-span-3 space-y-4'>
            {operators.map((operator) => (
              <Card key={operator.name} className='overflow-hidden'>
                <div className='p-6'>
                  <div className='flex justify-between items-start'>
                    <div className='space-y-4'>
                      <img src={operator.logo} alt={operator.name} className='h-8' />
                      <div className='flex items-center gap-2'>
                        <MapPin className='h-4 w-4' />
                        <span className='text-sm'>{operator.operatesIn.join(', ')}</span>
                      </div>
                      <div className='space-y-1'>
                        <div className='text-sm text-gray-500'>Vessels number: {operator.vessels}</div>
                        <div className='text-sm text-gray-500'>
                          Ferry types: {operator.ferryTypes.join(' and ')} ferries
                        </div>
                        <div className='text-sm text-gray-500'>
                          Popular vessels: {operator.popularVessels.join(', ')}
                        </div>
                      </div>
                    </div>
                    <div className='flex items-center gap-1'>
                      <Star className='h-4 w-4 fill-yellow-400 text-yellow-400' />
                      <span className='font-medium'>{operator.rating}</span>
                      <span className='text-sm text-gray-500'>by {operator.reviews} customers</span>
                    </div>
                  </div>
                  <p className='mt-4 text-sm text-gray-600'>{operator.description}</p>
                  <Button variant='link' className='mt-2 p-0 h-auto text-blue-500'>
                    More about {operator.name} →
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
