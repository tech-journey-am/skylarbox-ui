"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function ShadCNDemo() {
  return (
    <section className='py-16 bg-white'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-3xl font-display font-bold text-[#6B5B4F] text-center mb-8'>
            ShadCN UI Components Demo
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {/* Buttons Demo */}
            <Card className='border-[#D4B996]/30'>
              <CardHeader>
                <CardTitle className='text-[#6B5B4F]'>Buttons</CardTitle>
                <CardDescription>
                  Various button variants and sizes
                </CardDescription>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div className='flex flex-wrap gap-2'>
                  <Button className='bg-[#A67C5A] hover:bg-[#8B6F47]'>
                    Default
                  </Button>
                  <Button
                    variant='outline'
                    className='border-[#A67C5A] text-[#A67C5A] hover:bg-[#A67C5A] hover:text-white'
                  >
                    Outline
                  </Button>
                  <Button
                    variant='secondary'
                    className='bg-[#D4B996] text-[#6B5B4F] hover:bg-[#C4A77D]'
                  >
                    Secondary
                  </Button>
                  <Button
                    variant='ghost'
                    className='text-[#A67C5A] hover:bg-[#F0E6D6]'
                  >
                    Ghost
                  </Button>
                </div>
                <div className='flex flex-wrap gap-2'>
                  <Button size='sm' className='bg-[#A67C5A] hover:bg-[#8B6F47]'>
                    Small
                  </Button>
                  <Button
                    size='default'
                    className='bg-[#A67C5A] hover:bg-[#8B6F47]'
                  >
                    Default
                  </Button>
                  <Button size='lg' className='bg-[#A67C5A] hover:bg-[#8B6F47]'>
                    Large
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Form Demo */}
            <Card className='border-[#D4B996]/30'>
              <CardHeader>
                <CardTitle className='text-[#6B5B4F]'>Form Elements</CardTitle>
                <CardDescription>Input, textarea, and labels</CardDescription>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div className='space-y-2'>
                  <Label htmlFor='name' className='text-[#6B5B4F]'>
                    Name
                  </Label>
                  <Input
                    id='name'
                    placeholder='Enter your name'
                    className='border-[#D4B996]/30 focus:border-[#A67C5A]'
                  />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='email' className='text-[#6B5B4F]'>
                    Email
                  </Label>
                  <Input
                    id='email'
                    type='email'
                    placeholder='Enter your email'
                    className='border-[#D4B996]/30 focus:border-[#A67C5A]'
                  />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='message' className='text-[#6B5B4F]'>
                    Message
                  </Label>
                  <Textarea
                    id='message'
                    placeholder='Enter your message'
                    className='border-[#D4B996]/30 focus:border-[#A67C5A]'
                  />
                </div>
                <Button className='w-full bg-[#A67C5A] hover:bg-[#8B6F47]'>
                  Submit
                </Button>
              </CardContent>
            </Card>

            {/* Dialog Demo */}
            <Card className='border-[#D4B996]/30'>
              <CardHeader>
                <CardTitle className='text-[#6B5B4F]'>Dialog</CardTitle>
                <CardDescription>Modal dialog component</CardDescription>
              </CardHeader>
              <CardContent>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className='bg-[#A67C5A] hover:bg-[#8B6F47]'>
                      Open Dialog
                    </Button>
                  </DialogTrigger>
                  <DialogContent className='border-[#D4B996]/30'>
                    <DialogHeader>
                      <DialogTitle className='text-[#6B5B4F]'>
                        Welcome to Skylarbox
                      </DialogTitle>
                      <DialogDescription>
                        This is a demo dialog showcasing ShadCN UI components
                        integrated with our wellness theme.
                      </DialogDescription>
                    </DialogHeader>
                    <div className='space-y-4'>
                      <div className='space-y-2'>
                        <Label htmlFor='demo-input' className='text-[#6B5B4F]'>
                          Demo Input
                        </Label>
                        <Input
                          id='demo-input'
                          placeholder='Type something...'
                          className='border-[#D4B996]/30 focus:border-[#A67C5A]'
                        />
                      </div>
                      <div className='flex justify-end space-x-2'>
                        <Button
                          variant='outline'
                          className='border-[#A67C5A] text-[#A67C5A] hover:bg-[#A67C5A] hover:text-white'
                        >
                          Cancel
                        </Button>
                        <Button className='bg-[#A67C5A] hover:bg-[#8B6F47]'>
                          Save
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            {/* Cards Demo */}
            <Card className='border-[#D4B996]/30'>
              <CardHeader>
                <CardTitle className='text-[#6B5B4F]'>Cards</CardTitle>
                <CardDescription>
                  Card components with various content
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='space-y-4'>
                  <Card className='bg-gradient-to-br from-[#F8F6F0] to-[#F0E6D6] border-[#D4B996]/30'>
                    <CardHeader className='pb-3'>
                      <CardTitle className='text-sm text-[#6B5B4F]'>
                        Wellness Tip
                      </CardTitle>
                    </CardHeader>
                    <CardContent className='pt-0'>
                      <p className='text-sm text-[#8B7355]'>
                        Take a moment to breathe deeply and center yourself.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className='bg-gradient-to-br from-[#E8DCC0] to-[#D4B996] border-[#C4A77D]/30'>
                    <CardHeader className='pb-3'>
                      <CardTitle className='text-sm text-[#6B5B4F]'>
                        Daily Affirmation
                      </CardTitle>
                    </CardHeader>
                    <CardContent className='pt-0'>
                      <p className='text-sm text-[#8B7355]'>
                        I am worthy of love and healing.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
