/*
Note: To test your changes locally use `yarn dev` and http://localhost:3000/columbus
*/

import Head from 'next/head'
import { Box, Card, Grid, Heading, Image, Link, Text } from 'theme-ui'
import dynamic from 'next/dynamic'

// TODO: Change this schedule to your own!
const schedinprog = [{ time: 'XX:XX', event: 'SCHEDULE IN PROGRESS' }]

const schedule = [
  { time: '10:45 AM', event: 'Doors open' },
  { time: '11:15 PM', event: 'Kickoff Challenge' },
  { time: '12:00 PM', event: 'Opening Ceremony' },
  { time: '12:30 PM', event: 'Team formation & Brainstorming' },
  { time: '1:00 PM', event: 'Lunch' },
  { time: '1:30 PM', event: 'Hacking Starts!' },
  { time: '1:45 PM', event: 'Starter Project Workshop*' },
  { time: '3:00 PM', event: 'Cybersecurity Workshop*' },
  { time: '4:00 PM', event: 'Suprise Event*' },
  { time: '6:00 PM', event: 'Dinner!' },
  { time: '6:30 PM', event: 'Hacking Continues' },
  { time: '9:00 PM', event: 'End of Day Game*' },
  { time: '9:10 PM', event: 'Closing' }
]

const scheduleday2 = [
  { time: '11:00 AM', event: 'Doors Open' },
  { time: '11:30 AM', event: 'Final Coding' },
  { time: '1:00 PM', event: 'Project Demos and Judging' },
  { time: '2:00 PM', event: 'Awards Ceremony & Prizes' },
  { time: '2:30 PM', event: 'Closing Ceremony' }
]

//const Map = dynamic(() => import('../components/Map'), { ssr: false })

const Flag = () => (
  <Link
    href="https://hackclub.com/"
    target="_blank"
    aria-label="Hack Club's homepage"
    sx={{ position: 'absolute', top: 4, left: 0, zIndex: 2 }}
  >
    <Image
      src="/elements/orpheus-flag.svg"
      alt="Hack Club flag"
      sx={{
        width: [120, 128, 180],
        transformOrigin: '0% 0%',
        transition: 'transform 0.1s',
        ':hover': {
          transform: 'rotate(0.03turn) scale(1.2) translateY(-4px)'
        }
      }}
    />
  </Link>
)

export default function ExampleCity() {
  return (
    <Box
      sx={{
        background:
          "url('/backgrounds/cutting-mat.png'), linear-gradient(#337D78, #337D78)",
        backgroundSize: ['1100px', '1100px', '1100px', 'contain'],
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        overflowX: 'hidden'
      }}
    >
      <Head>
        {/* TODO: Change Columbus to your event's city */}
        <title>Scrapyard Columbus</title>
      </Head>
      <Flag />
      <Box
        sx={{
          width: '100%',
          height: ['80vh', '80vh', '90vh'],
          bg: 'transparent',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '20px'
        }}
      >
        <Box
          sx={{
            position: 'relative'
          }}
        >
          <Image
            sx={{
              width: '600px',

              maxWidth: '70vw',

              objectFit: 'contain'
            }}
            src="/elements/wordmark.svg"
            alt="Scrapyard"
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Box
            sx={{
              background: "url('/elements/ripped-paper.png')",
              backgroundSize: 'cover',
              // aspectRatio: "1080/338.4",
              // padding: "8%",
              // paddingLeft: "7%",
              display: 'block',

              width: 'min(500px, calc(100vw - 30px))',
              filter: 'drop-shadow(5px 5px 5px #000000AA)',
              position: 'relative',
              zIndex: 20
            }}
          >
            <Heading
              as="h2"
              sx={{
                fontFamily: 'moonblossom',
                textAlign: 'center',
                margin: '8%'
              }}
            >
              Build stupid stuff, get stupid prizes.
            </Heading>
          </Box>
          <Box
            sx={{
              zIndex: 1,
              width: 'max-content',
              backgroundImage: "url('/elements/yellow-strip@stretch.svg')",
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100% 100%',
              width: '75%',
              position: 'relative',
              zIndex: 30,
              top: '-15%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              py: '3%',
              filter: 'drop-shadow(5px 5px 5px #00000099)'
            }}
          >
            <Heading
              as="h2"
              sx={{
                fontFamily: 'p22-stanyan',
                mx: '8%',
                p: 0,
                wordBreak: 'keep-all',
                whiteSpace: 'nowrap',
                width: 'max-content',
                fontSize: ['1.2em', '1.4em']
              }}
            >
              {/* TODO: Change Columbus to your event's city */}
              Columbus, OH - March&nbsp;15-16
            </Heading>

            <Heading
              as="h2"
              sx={{
                fontFamily: 'p22-stanyan',
                mx: '8%',
                p: 1.5,
                wordBreak: 'keep-all',
                whiteSpace: 'nowrap',
                width: 'max-content',
                fontSize: ['1.2em', '1.4em']
              }}
            >
              PAST Foundation - Upper Arlington
            </Heading>
          </Box>
        </Box>
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100vw'
          }}
        >
          <Image
            sx={{
              width: '10%',
              height: '10%',
              zIndex: 2,
              position: 'absolute',
              top: '50%',
              left: '10%'
            }}
            src="/elements/stars/blue.png"
            alt="Blue paper star"
          />
          <Image
            sx={{
              width: '10%',
              height: '10%',
              zIndex: 2,
              position: 'absolute',
              top: '55%',
              right: '15%'
            }}
            src="/elements/stars/yellow.png"
            alt="Yellow paper star"
          />
          <Image
            sx={{
              width: '10%',
              height: '10%',
              zIndex: 2,
              position: 'absolute',
              top: '70%',
              left: '20%',
              transform: 'rotate(180deg)'
            }}
            src="/elements/stars/pink.png"
            alt="Pink paper star"
          />
        </Box>
        <Link
          // TODO: Change [EVENTID] to your event's ID (see https://airtable.com/appigKiF7GbVISAlg/shrK3OiCJs4BRBIRG)
          href="https://forms.hackclub.com/scrapyard-signup?event=columbus"
          target="_blank"
        >
          <Box
            sx={{
              backgroundImage: "url('/elements/yellow-strip@stretch.svg')",
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100% 100%',
              position: 'fixed',
              right: ['2%'],
              top: ['4%'],
              filter: 'drop-shadow(5px 5px 5px #000)',
              transition: 'transform 0.2s',
              ':hover': {
                transform: 'scale(1.1)'
              },
              zIndex: 30,
              minWidth: '8em',
              padding: '15px'
            }}
          >
            <Heading
              as="h2"
              sx={{
                fontFamily: 'moonblossom',
                textAlign: 'center',
                padding: ['2%', '8%'],
                fontSize: ['1.2em', '1.4em'],
                textTransform: 'inherit!important',
                width: '100%'
              }}
            >
              SIGN&nbsp;UP
            </Heading>
          </Box>
        </Link>
      </Box>

      <Box
        sx={{
          width: '100%',
          background: "url('/elements/paper-top.png')",
          backgroundSize: 'contain',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '20px',
          position: 'relative',
          height: '23vw'
        }}
      >
        <img
          src="/elements/trash-can.png"
          style={{
            position: 'absolute',
            top: '0px',
            right: '0px',
            width: '65vw',
            transform: 'translateY(-20%)',
            zIndex: 7
          }}
        />
      </Box>
      <Box
        sx={{
          width: '100%',
          // background: "linear-gradient(#F5F5F5, #F2F2F2)",
          background: 'url(/backgrounds/ripped-paper.png)',
          backgroundSize: 'cover',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '20px',
          pt: 6,
          px: 4,
          position: 'relative'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: ['column', 'column', 'row'],
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%'
          }}
        >
          <Image src="/elements/orpheus-doodle.svg" />
          <Box
            sx={{
              maxWidth: ['80vw', '60vw', '40vw'],
              padding: '40px',
              zIndex: 1,
              backgroundImage: 'url(/elements/sticky-note.svg)',
              backgroundSize: 'cover',
              filter: 'drop-shadow(5px 5px 5px #000000AA)'
            }}
          >
            <Heading
              sx={{
                textDecoration: 'underline'
              }}
            >
              {/* TODO: Change Columbus to your event's city */}
              What is Scrapyard?
            </Heading>
            <p
              style={{
                fontSize: '1.5em'
              }}
            >
              {/* TODO: Change Columbus to your event's city */}
              Scrapyard is The Most Useless Invention competition, happening in
              Columbus. Make the stupidest things you can think of and win
              awesome stuff. Anything, from a{' '}
              <Link href="https://www.youtube.com/watch?v=PnK4gzO6S3Q">
                lamp that flashes faster the slower you type
              </Link>
              , to those useless ideas you thought of lying in bed, Scrapyard
              Columbus needs you and your janky inventions!
            </p>
          </Box>
        </Box>
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            zIndex: 1,
            display: ['none', 'none', 'block']
          }}
        >
          <Image
            src="/elements/doodles/arrow.svg"
            sx={{ position: 'absolute', left: '5%', top: '0%' }}
          />
          <Image
            src="/elements/doodles/pinkcircle.svg"
            sx={{ position: 'absolute', left: '20%', top: '0%' }}
          />
          <Image
            src="/elements/doodles/yellowcircle.svg"
            sx={{ position: 'absolute', left: '8%', top: '70%' }}
          />
          <Image
            src="/elements/doodles/bluesquiggle.svg"
            sx={{ position: 'absolute', left: '8%', top: '84%' }}
          />
          <Image
            src="/elements/doodles/yellowlines.svg"
            sx={{ position: 'absolute', left: '37%', top: '80%' }}
          />
          <Image
            src="/elements/doodles/bluecircle.svg"
            sx={{ position: 'absolute', right: '30%', top: '78%' }}
          />
          <Image
            src="/elements/doodles/pinksquiggle.svg"
            sx={{ position: 'absolute', right: '10%', top: '80%' }}
          />
          <Image
            src="/elements/doodles/bluedrops.svg"
            sx={{ position: 'absolute', right: '10%', top: '0%' }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          width: '100vw',
          background: "url('/backgrounds/ripped-paper-bottom.png')",
          backgroundSize: 'cover',

          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',

          height: '17.03212647vw',
          position: 'relative'
        }}
      ></Box>

      <Box
        sx={{
          // backgroundImage: "url(/backgrounds/confetti.png)",
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Box
          sx={{
            backgroundImage: 'url(/elements/ripped-paper-strip.svg)',
            // backgroundSize: "cover!important",
            // display: "block",
            // width: "30vw",
            height: '30vh',
            width: ['90vw', '70vw', '46.8vw'],
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0vh',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Heading
            as="h1"
            sx={{
              mx: '1vw',
              fontWeight: 'lighter',
              textAlign: 'center'
            }}
          >
            {/* TODO: Change Columbus to your event's city */}
            WHAT'S HAPPENING AT SCRAPYARD Columbus?
          </Heading>
        </Box>
        <Heading
          as="h2"
          sx={{
            fontSize: '1.5em',
            fontFamily: 'moonblossom',
            color: 'white',
            textAlign: 'center'
          }}
        >
          Scrapyard Columbus is a 2-day event - HERE'S THE SCHEDULE!
        </Heading>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: ['90%', '70%'],
            fontSize: '2em',
            gap: '0.2em',
            color: 'black',
            my: 5,
            background: "url('/backgrounds/lined-paper.png')",
            backgroundSize: ['contain', 'contain', 'cover!important'],
            p: 4,
            borderRadius: 1,
            boxShadow: '10px 10px 5px rgba(0, 0, 0, 0.3)'
          }}
        >
          <Heading
            as="h2"
            sx={{
              fontSize: '1.5em',
              fontFamily: 'moonblossom',
              color: 'black',
              textAlign: 'center',
              paddingBottom: 50
            }}
          >
            Day 1 (SATURDAY)
          </Heading>
        
          {schedinprog.map((item, i) => (
            <div
              style={{
                display: 'flex',
                width: '100%',
                alignItems: 'center'
              }}
              key={i}
            >
              <Heading
                as="p"
                sx={{
                  display: 'inline',
                  width: ['min-content', 'max-content'],
                  fontSize: '2rem',
                  fontFamily: 'p22-stanyan'
                }}
              >
                {schedule.map((item, index) => (
    <div
      key={index}
      style={{
        marginBottom: '2.5rem', // Adds space between events
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <span
        style={{
          fontWeight: 'bold',
          textAlign: 'left',
        }}
      >
        {item.event}
      </span>

      <span
        style={{
          flexGrow: 1, // Makes the dots container stretch to fill available space
          textAlign: 'right',
          whiteSpace: 'nowrap',
          marginLeft: '1rem', // Adds space between event name and dots
        }}
      >
        {'.'.repeat(20)} {/* Adjust the number of dots here */}
      </span>

      <span
        style={{
          fontWeight: 'normal',
          textAlign: 'right',
          minWidth: '110px',
        }}
      >
       {item.time}
      </span>
    </div>
  ))}

<div style={{ marginLeft:'175px', marginTop: '10px', fontStyle: 'italic' }}>
  *Optional Events
</div>
              </Heading>

              <Box
                sx={{
                  mx: 2,
                  transform: 'translateY(0.75rem)',
                  borderWidth: 0,
                  borderBottomWidth: '0.35rem',
                  borderStyle: 'dotted',
                  flexGrow: '1',
                  display: 'inline',
                  height: 1
                }}
              ></Box>
              <p style={{ display: 'inline', margin: 0 }}>{item.time}</p>
            </div>
          ))}

          {/* <Heading
          as="h2"
          sx={{
            fontSize: '1.5em',
            fontFamily: 'moonblossom',
            color: 'black',
            textAlign: 'center',
            paddingTop: 30
          }}
        >
          SLEEP (...zzz)
        </Heading> */}
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: ['90%', '70%'],
            fontSize: '2em',
            gap: '0.2em',
            color: 'black',
            my: 5,
            background: "url('/backgrounds/lined-paper.png')",
            backgroundSize: ['contain', 'contain', 'cover!important'],
            p: 4,
            borderRadius: 1,
            boxShadow: '10px 10px 5px rgba(0, 0, 0, 0.3)'
          }}
        >
          <Heading
            as="h2"
            sx={{
              fontSize: '1.5em',
              fontFamily: 'moonblossom',
              color: 'black',
              textAlign: 'center',
              paddingBottom: 50
            }}
          >
            Day 2 (SUNDAY)
          </Heading>

          {schedinprog.map((item, i) => (
            <div
              style={{
                display: 'flex',
                width: '100%',
                alignItems: 'center'
              }}
              key={i}
            >
              <Heading
                as="p"
                sx={{
                  display: 'inline',
                  width: ['min-content', 'max-content'],
                  fontSize: '2rem',
                  fontFamily: 'p22-stanyan'
                }}
              >
                {scheduleday2.map((item, index) => (
    <div
      key={index}
      style={{
        marginBottom: '2.5rem', // Adds space between events
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <span
        style={{
          fontWeight: 'bold',
          textAlign: 'left',
        }}
      >
        {item.event}
      </span>

      <span
        style={{
          flexGrow: 1, // Makes the dots container stretch to fill available space
          textAlign: 'right',
          whiteSpace: 'nowrap',
          marginLeft: '1rem', // Adds space between event name and dots
        }}
      >
        {'.'.repeat(20)} {/* Adjust the number of dots here */}
      </span>

      <span
        style={{
          fontWeight: 'normal',
          textAlign: 'right',
          minWidth: '110px',
        }}
      >
       {item.time}
      </span>
    </div>
  ))}
              </Heading>
              <Box
                sx={{
                  mx: 2,
                  transform: 'translateY(0.75rem)',
                  borderWidth: 0,
                  borderBottomWidth: '0.35rem',
                  borderStyle: 'dotted',
                  flexGrow: '1',
                  display: 'inline',
                  height: 1
                }}
              ></Box>
              <p style={{ display: 'inline', margin: 0 }}>{item.time}</p>
            </div>
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          // backgroundImage: "url(/backgrounds/confetti.png)",
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Box
          sx={{
            backgroundImage: 'url(/elements/ripped-paper-strip.svg)',
            // backgroundSize: "cover!important",
            // display: "block",
            // width: "30vw",
            height: '30vh',
            width: ['90vw', '70vw', '46.8vw'],
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0vh',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Heading
            as="h1"
            sx={{
              mx: '1vw',
              fontWeight: 'lighter',
              textAlign: 'center',
              paddingTop: 15
            }}
          >
            {/* TODO: Change Columbus to your event's city */}
            CAN'T MAKE IT TO Columbus?
          </Heading>
        </Box>
        <Heading
          as="h2"
          sx={{
            fontSize: '1.5em',
            fontFamily: 'moonblossom',
            color: 'white',
            textAlign: 'center',
            mx: '5vw'
          }}
        >
          THERE ARE 100+ OTHER SCRAPYARD EVENTS HAPPENING AROUND THE WORLD!
        </Heading>
        <Box
          sx={{
            width: ['100%', '80%'],
            height: '75vh',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            mb: '10vh',
            mt: 5
          }}
        >
          {/* <Map> */}
        </Box>
      </Box>

      <Box
        sx={{
          width: '100%',
          background: "url('/backgrounds/lined-paper.png')",
          backgroundSize: ['contain', 'contain', 'cover!important'],
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '20px',
          p: [4, 4, 5],
          pt: 6,
          position: 'relative'
        }}
      >
        <Heading
          as="h1"
          sx={{
            mb: 5,
            position: 'relative'
          }}
        >
          Frequently Asked Questions
          <Image
            src="/elements/doodles/blue-underline.svg"
            sx={{
              position: 'absolute',
              bottom: '0',
              left: '50%',
              transform: 'translateX(-50%) translateY(75%)'
            }}
          />
        </Heading>
        <Grid
          columns={[1, 1, 1, 2]}
          gap={4}
          sx={{
            maxWidth: '1200px'
          }}
        >
          {Object.entries({
            'Who can participate in Scrapyard?': (
              <>
                All high-school aged students are welcome, just fill out the{' '}
                <Link href="https://forms.hackclub.com/scrapyard-signup?event=columbus">
                  form
                </Link>
                !
              </>
            ),
            'All this, for free?': (
              <>
                Yep! Food, swag and good vibes are all included. Plus, if you’re
                joining us from afar,{' '}
                <Link href="https://gas.hackclub.com/">
                  we’ll cover the cost of gas or a bus / train ticket
                </Link>
                .
              </>
            ),
            'What do I need?': (
              <>
                Your laptop, chargers, and an open mind! Additionally, if you
                plan to work on a hardware project, bring the tools you'll need.
                3D printers at the event are TBD.
              </>
            ),
            'I dont know how to code. Can I still participate?': (
              <>
                Knowing how to code is NOT required. Whether your Useless
                Invention is on Scratch or Google Docs, you'll still be eligible
                for epic prizes. This hackathon is for all skill levels, even if
                you'll be writing your first line of code we'll have workshops
                and mentors to help you out.
              </>
            ),
            'What can I make at Scrapyard?': (
              <>
                The most useless thing you can imagine –- jank is encouraged.
                Apps? Games? Websites? We’ll have a bunch of resources and
                mentors to help you fulfill your most pointless inventions.
              </>
            ),
            'What has Hack Club done before?': (
              <>
                Hack Club has run an{' '}
                <Link href="https://youtu.be/PnK4gzO6S3Q" target="_blank">
                  overnight hackathon
                </Link>{' '}
                in San Francisco, a{' '}
                <Link
                  href="https://www.youtube.com/watch?v=H5RPsCMl3uM"
                  target="_blank"
                >
                  Game Jam
                </Link>{' '}
                across 50 cities, a hackathon on an{' '}
                <Link href="https://youtu.be/2BID8_pGuqA" target="_blank">
                  Express Train
                </Link>{' '}
                from Vermont to Los Angeles, and much more!
              </>
            ),
            'My parents are asking...?': (
              <>
                We’re here to help! Our parents guide will be released soon, but
                they can reach out to us at{' '}
                <Link href="mailto:columbus@scrapyard.hackclub.com">
                  columbus@scrapyard.hackclub.com
                </Link>{' '}
                for questions.
              </>
            ),
            'I have more questions': (
              <>
                Contact us! Feel free to reach out to us at{' '}
                <Link href="mailto:columbus@scrapyard.hackclub.com">
                  columbus@scrapyard.hackclub.com
                </Link>{' '}
                or in the #scrapyard-columbus channel on the Hack Club slack.
              </>
            )
          }).map(([question, answer], i) => {
            return (
              <Card
                key={question}
                sx={{
                  background: [
                    'transparent',
                    `url('/elements/doodles/boxes/${(i % 6) + 1}.svg')`
                  ],
                  backgroundSize: [null, '100% 100%'],
                  backgroundRepeat: 'no-repeat',
                  boxShadow: 'none',
                  padding: '48px!important',
                  border: ['2px solid black', 'none']
                }}
              >
                <Heading
                  as="h2"
                  mb={4}
                  sx={{
                    position: 'relative'
                  }}
                >
                  {question}
                  <Image
                    src="/elements/doodles/yellow-underline.svg"
                    sx={{
                      position: 'absolute',
                      bottom: '0',
                      left: '50%',
                      transform: 'translateX(-50%) translateY(75%)'
                    }}
                  />
                </Heading>
                <Text
                  sx={{
                    fontSize: 3,
                    fontWeight: 'bold'
                  }}
                >
                  {answer}
                </Text>
              </Card>
            )
          })}
        </Grid>

        <Link
          // TODO: Change [EVENTID] to your event's ID (see https://airtable.com/appigKiF7GbVISAlg/shrK3OiCJs4BRBIRG)
          href="https://forms.hackclub.com/scrapyard-signup?event=columbus"
          target="_blank"
        >
          <Box
            sx={{
              backgroundImage: "url('/elements/yellow-strip@stretch.svg')",
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100% 100%',
              filter: 'drop-shadow(5px 5px 5px #000)',
              transition: 'transform 0.2s',
              ':hover': {
                transform: 'scale(1.1)'
              },
              zIndex: 20,
              padding: 1,
              my: 3
            }}
          >
            <Heading
              as="h2"
              sx={{
                fontFamily: 'moonblossom',
                textAlign: 'center',
                margin: '8%',
                fontSize: ['1.2em', '1.4em'],
                textTransform: 'inherit!important',
                paddingY: ['15px', '0px']
              }}
            >
              {/* TODO: Change Columbus to your event's city */}
              SIGN UP FOR SCRAPYARD Columbus
            </Heading>
          </Box>
        </Link>

        <Heading
          as="h1"
          sx={{
            mb: 5,
            position: 'relative',
            paddingTop: 70
          }}
        >
          Meet the organizers
          <Image
            src="/elements/doodles/pink-underline.svg"
            sx={{
              position: 'absolute',
              bottom: '0',
              left: '50%',
              transform: 'translateX(-50%) translateY(75%)',
              paddingTop: 10
            }}
          />
        </Heading>

        {/* <Image
            src="/city/columbus/organizers/meghanapfp.jpg"
            sx={{
              width: [120, 128, 180],
              position: 'absolute',
              transform: 'translateY(370%)'
            }}
            /> */}

        <Heading
          as="h2"
          sx={{
            mt: 3,
            position: 'relative'
          }}
        >
          Scrapyard
          <Image
            src="/elements/doodles/pink-underline.svg"
            sx={{
              position: 'absolute',
              bottom: '0',
              left: '50%',
              transform: 'translateX(-50%) translateY(75%)'
            }}
          />
        </Heading>
        <Text
          sx={{
            fontFamily: 'moonblossom',
            mb: -2,
            textAlign: 'center'
          }}
        >
          Made with ♡ by teenagers, for teenagers at Hack Club
        </Text>
        <Text
          sx={{
            fontFamily: 'moonblossom',
            mt: 0,
            textAlign: 'center'
          }}
        >
          <Link href="https://hackclub.com">Hack Club</Link>{' '}
          <span sx={{ transform: 'scale(2)' }}>・</span>{' '}
          <Link href="https://hackclub.com/slack">Slack</Link>{' '}
          <span sx={{ transform: 'scale(2)' }}>・</span>{' '}
          <Link href="https://hackclub.com/clubs">Clubs</Link>{' '}
          <span sx={{ transform: 'scale(2)' }}>・</span>{' '}
          <Link href="https://hackclub.com/hackathons">Hackathons</Link>
        </Text>
      </Box>
    </Box>
  )
}
