import React, { useEffect, useState } from 'react'
import {
  Box,
  Container,
  SimpleGrid,
  Heading,
  Text,
  Image,
  Stack,
  Badge,
  useColorModeValue,
  Spinner,
  Center,
  Button
} from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import Testimonials from '../components/Testimonials'
import Footereds from '../components/Servicefooter'
import BlogsBanner from '../components/Blogs'

import Link from 'next/link'

interface Blog {
  id: string
  title: string
  subtitle: string
  category: string
  readTime: string
  introduction: string
  imageUrl: string
  generatedAt: string
}

const BlogPage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/blogs')
      .then(res => res.json())
      .then(data => {
        setBlogs(data.blogs || [])
        setLoading(false)
      })
      .catch(err => {
        console.error('Failed to fetch blogs', err)
        setLoading(false)
      })
  }, [])

  return (
    <Box bg={useColorModeValue('gray.50', 'gray.900')} minH="100vh">
      <Navbar />
      <BlogsBanner />

      <Container maxW="7xl" py={12}>
        <Box mb={10} textAlign="center">
          <Heading color="#02428d" mb={4}>Our Latest Research Insights</Heading>
          <Text color="gray.600" fontSize="lg">Discover articles on research methodology, academic publishing, and data analysis.</Text>
        </Box>

        {loading ? (
          <Center py={20}>
            <Spinner size="xl" color="#02428d" thickness="4px" />
          </Center>
        ) : blogs.length === 0 ? (
          <Center py={20}>
            <Text fontSize="xl" color="gray.500">No blogs published yet. Check back soon!</Text>
          </Center>
        ) : (
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {blogs.map((blog) => (
              <Box
                key={blog.id}
                bg={useColorModeValue('white', 'gray.800')}
                rounded="xl"
                shadow="lg"
                overflow="hidden"
                transition="all 0.3s"
                _hover={{ transform: 'translateY(-5px)', shadow: '2xl' }}
                display="flex"
                flexDirection="column"
              >
                <Box h="220px" overflow="hidden" position="relative">
                  <Image
                    src={blog.imageUrl || 'https://via.placeholder.com/600x400'}
                    alt={blog.title}
                    objectFit="cover"
                    w="100%"
                    h="100%"
                    transition="transform 0.5s"
                    _hover={{ transform: 'scale(1.05)' }}
                  />
                  <Badge 
                    position="absolute" 
                    top={4} 
                    left={4} 
                    colorScheme="blue" 
                    bg="#e0a72b"
                    color="#fff"
                    px={3}
                    py={1}
                    rounded="full"
                    textTransform="uppercase"
                  >
                    {blog.category}
                  </Badge>
                </Box>
                
                <Stack p={6} flex={1} spacing={4}>
                  <Stack direction="row" justify="space-between" align="center" fontSize="sm" color="gray.500">
                    <Text>{new Date(blog.generatedAt).toLocaleDateString()}</Text>
                    <Text>{blog.readTime}</Text>
                  </Stack>
                  
                  <Heading as="h3" size="md" lineHeight="1.4" color="#02428d">
                    {blog.title}
                  </Heading>
                  
                  <Text color="gray.600" fontSize="sm" noOfLines={3} flex={1}>
                    {blog.introduction}
                  </Text>
                  
                  <Link href={`/blog/${blog.id}`} passHref>
                    <Button 
                      mt="auto" 
                      variant="outline" 
                      color="#02428d" 
                      borderColor="#02428d"
                      _hover={{ bg: '#02428d', color: 'white' }}
                      rounded="full"
                      size="sm"
                      alignSelf="flex-start"
                    >
                      Read More
                    </Button>
                  </Link>
                </Stack>
              </Box>
            ))}
          </SimpleGrid>
        )}
      </Container>

      <Testimonials />
      <Footereds />
    </Box>
  )
}

export default BlogPage
