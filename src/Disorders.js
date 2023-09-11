import React from 'react';

function Disorder() {
    const stlyetag = {
        textAlign: 'justify',
        fontFamily: 'Comic Sans MS, sans-serif',
        padding: '50px 50px',
        backgroundColor: '#ffffff',
        borderRadius: '10px',
    };
    
      const titleStyle = {
        fontSize: '24px',
        color: '#333',
      };
    
      const paragraphStyle = {
        fontSize: '16px',
        lineHeight: '1.5',
        marginBottom: '10px',
        color: '#265454'
      };
    
      const listStyle = {
        paddingLeft: '20px',
        listStyleType: 'disc',
      };
    
      const strongStyle = {
        color: '#FE7F2D',
      };

  return (
     <div style={stlyetag}>
        <h1 style={titleStyle}> <strong style={strongStyle}>Child Behavior Disorders</strong></h1>
        <p style={paragraphStyle}>Here is some information about various child behavior disorders:</p>
        <ul style={listStyle}>
            <li><strong style={strongStyle}>Oppositional Defiant Disorder (ODD)</strong></li>
            <p style={paragraphStyle}>
                When children act out persistently so that it causes serious problems at home, in school, or with peers, they may be diagnosed with Oppositional Defiant Disorder (ODD). ODD usually starts before 8 years of age, but no later than by about 12 years of age. Children with ODD are more likely to act oppositional or defiant around people they know well, such as family members, a regular care provider, or a teacher. Children with ODD show these behaviors more often than other children their age. In children with Oppositional Defiant Disorder (ODD), there is an ongoing pattern of uncooperative, defiant, and hostile behavior toward authority figures that seriously interferes with the child's day to day functioning.
            </p>
            
            <p style={paragraphStyle}><strong style={strongStyle}>Treatment<br /></strong>
                1. Parent Management Training to help parents and others manage the child's behavior.<br />
                2.Individual Psychotherapy to develop more effective anger management.<br />
                3. Family Psychotherapy to improve communication and mutual understanding.<br />
                4. Cognitive Problem-Solving Skills Training and Therapies to decrease negativity.<br />
                5. Social Skills Training to increase flexibility and improve social skills and frustration tolerance with peers.<br />


        </p>
            <li><strong style={strongStyle}>Conduct Disorder (CD)</strong></li>
            <p style={paragraphStyle}>
            Conduct Disorder (CD) is diagnosed when children show an ongoing pattern of aggression toward others, and serious violations of rules and social norms at home, in school, and with peers. These rule violations may involve breaking the law and result in arrest. Children with CD are more likely to get injured and may have difficulties getting along with peers.
            </p>
           
            <p style={paragraphStyle}><strong style={strongStyle}>Treatment <br /></strong>
              1. Behavior therapy and psychotherapy are usually necessary to help the child appropriately express and control anger. Special education may be needed for youngsters with learning disabilities. <br />
                2. Parents often need expert help to develop and carry out special management and educational programs in the home and at school. <br />
                3. Home-based treatment programs such as Multisystemic Therapy (MST) are effective for helping both the child and family.<br />
                4. Treatment include medication in some youngsters who may have difficulty paying attention, impulse problems, or depression.<br />
                
                
            </p>
            <li><strong style={strongStyle}>ADHD - Attention-Deficit/Hyperactivity Disorder</strong></li>
            <p style={paragraphStyle}>
                ADHD is one of the most common neurodevelopmental disorders of childhood. It is usually first diagnosed in childhood and often lasts into adulthood. Children with ADHD may have trouble paying attention, controlling impulsive behaviors (may act without thinking about what the result will be), or be overly active.<br />


            </p>
            <p style={paragraphStyle}><strong style={strongStyle}>Treatment</strong><br />
            1. Being healthy is important for all children and can be especially important for children with ADHD. <br />
                2. Developing healthy eating habits such as eating plenty of fruits, vegetables, and whole grains and choosing lean protein sources.<br />
                3. Participating in daily physical activity based on age.<br />
                4. Limiting the amount of daily screen time from TVs, computers, phones, and other electronics.<br />
                5. Getting the recommended amount of sleep each night based on age.<br />
                
            </p>
            <li><strong style={strongStyle}>Tourette Syndrome (TS)</strong></li>
            <p style={paragraphStyle}>
                Tourette Syndrome (TS) is a condition of the nervous system. TS causes people to have "tics". Tics are sudden twitches, movements, or sounds that people do repeatedly. People who have tics cannot stop their body from doing these things.
                For example, a person might keep blinking over and over. Or, a person might make a grunting sound unwillingly.
Having tics is a little bit like having hiccups. Even though you might not want to hiccup, your body does it anyway. Sometimes people can stop themselves from doing a certain tic for a while, but it’s hard. Eventually the person has to do the tic.

            </p>
            <p style={paragraphStyle}><strong style={strongStyle}>Treatment<br /></strong>
                1. Medications for Tourette Syndrome.<br />
                2. Behavioral Therapy for Tourette Syndrome.<br />
                3. Habit Reversal.<br />
                4. Comprehensive Behavioral Intervention for Tics (CBIT).<br />
                5. Supporting Children and Families.<br />
                6. Parent Training.<br />
            </p>
            <li><strong style={strongStyle}>Obsessive-Compulsive Disorder (OCD)</strong></li>
            <p style={paragraphStyle}>
                Children may have an obsessive-compulsive disorder (OCD) when unwanted thoughts, and the behaviors they feel they must do because of the thoughts, happen frequently, take up a lot of time (more than an hour a day), interfere with their activities, or make them very upset. The thoughts are called obsessions. The behaviors are called compulsions.
                
            </p>
            <p style={paragraphStyle}><strong>Treatment<br /></strong>
                1.talk with a healthcare provider to arrange an evaluation. <br />
                2. Behavior therapy, specifically cognitive-behavioral therapy, helps the child change negative thoughts into more positive.<br />
            </p>
            <li><strong style={strongStyle}>Post-traumatic Stress Disorder (PTSD)</strong></li>
            <p style={paragraphStyle}>
                All children may experience very stressful events that affect how they think and feel. Most of the time, children recover quickly and well. However, sometimes children who experience severe stress, such as from an injury, from the death or threatened death of a close family member or friend, or from violence, will be affected long-term. The child could experience this trauma directly or could witness it happening to someone else. When children develop long-term symptoms (longer than one month) from such stress, which are upsetting or interfere with their relationships and activities, they may be diagnosed with post-traumatic stress disorder (PTSD).<br />

            </p>
            <p style={paragraphStyle}><strong style={strongStyle}>Treatment<br /></strong>
                1. talk with a healthcare provider to arrange an evaluation.<br />
                2. Psychotherapy in which the child can speak, draw, play, or write about the stressful event can be done with the child, the family, or a group.
            </p>
            </ul>
        </div>
  );
}

export default Disorder;