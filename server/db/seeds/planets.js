/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('planets').del()
  await knex('planets').insert([
    {
      id: 101,
      name: 'Sun',
      represent: 'The Sun represents your ego, identity, and role in life.',
      in_aries:
        'This placement often signifies a strong sense of self, confidence, and leadership qualities. Those with this placement may be assertive, competitive, and independent.',
      in_taurus:
        'This placement often signifies a strong sense of stability, perseverance, and practicality. Those with this placement may be patient, reliable, and have a strong work ethic.',
      in_gemini:
        'This placement often signifies a strong sense of intellect, communication skills, and adaptability. Those with this placement may have a curious mind, a quick wit, and a talent for multitasking.',
      in_cancer:
        'This placement often signifies emotional depth, sensitivity, and a strong connection to family and home. Those with this placement may be nurturing, intuitive, and have a talent for creative expression.',
      in_leo:
        'This placement is ruled by the Sun and often signifies a strong sense of self, creativity, and leadership abilities. Those with this placement may be confident, expressive, and have a talent for performance or the arts.',
      in_virgo:
        'This placement often signifies a practical, analytical approach to life and a strong attention to detail. Those with this placement may be perfectionists, hardworking, and have a talent for organization and efficiency.',
      in_libra:
        'This placement often signifies a diplomatic, charming, and harmonious approach to life. Those with this placement may have a talent for bringing people together, and may value balance and fairness in their relationships.',
      in_scorpio:
        'This placement can bring intensity, passion, and depth to a persons personality. Those with this placement may have a strong willpower and may be drawn to mystery and the unknown. They may also be highly perceptive and intuitive.',
      in_sagittarius:
        'This placement can bring a sense of adventure, exploration, and intellectual curiosity to a persons personality. Those with this placement may be drawn to travel, higher education, and exploring new cultures and ideas.',
      in_capricorn:
        'This placement can bring a sense of responsibility, ambition, and discipline to a persons personality. Those with this placement may be drawn to leadership roles and may have a talent for long-term planning and strategy.',
      in_aquarius:
        'This placement can bring a sense of independence, individuality, and unconventional thinking to a persons personality. Those with this placement may be drawn to social causes or movements and may have a talent for innovation and creativity.',
      in_pisces:
        'This placement can bring a deep sensitivity, empathy, and creativity to a persons personality. Those with this placement may have a strong connection to their intuition and emotions and may be drawn to artistic or spiritual pursuits.',
    },
    {
      id: 102,
      name: 'Moon',
      represent: 'The Moon represents your emotions, moods, and feelings.',
      in_aries:
        'This placement can bring a quick temper, impatience, and a need for emotional independence. Those with this placement may have a strong need for action and may be prone to impulsiveness.',
      in_taurus:
        'This placement can bring a need for emotional security and stability. Those with this placement may be affectionate, loyal, and enjoy the comforts of home and routine.',
      in_gemini:
        'This placement can bring a need for variety and mental stimulation. Those with this placement may have a fluctuating emotional state and may enjoy socializing, learning, and exploring new ideas.',
      in_cancer:
        'This placement is ruled by the Moon, and can bring a heightened sense of emotional sensitivity and receptivity. Those with this placement may have strong maternal instincts, be deeply attached to their family and home, and may be creative or artistic.',
      in_leo:
        'This placement can bring a need for attention and validation, as well as a strong sense of personal pride. Those with this placement may be expressive, dramatic, and enjoy being the center of attention.',
      in_virgo:
        'This placement can bring a need for order and routine, as well as a critical approach to emotions. Those with this placement may be practical, diligent, and may struggle with emotional expression.',
      in_libra:
        'This placement can bring a need for balance and harmony in relationships, as well as a desire for beauty and refinement. Those with this placement may struggle with making decisions and may need to learn how to assert themselves.',
      in_scorpio:
        'This placement can bring emotional intensity, depth, and a need for privacy in a persons emotional life. Those with this placement may be highly sensitive and may experience strong emotions that can be difficult to express.',
      in_sagittarius:
        'This placement can bring emotional openness, optimism, and a desire for new experiences in a persons emotional life. Those with this placement may be highly adaptable and may seek out experiences that expand their horizons.',
      in_capricorn:
        'This placement can bring emotional reserve, practicality, and a need for stability in a persons emotional life. Those with this placement may be reserved in expressing their emotions and may prioritize practical considerations over emotional fulfillment.',
      in_aquarius:
        'This placement can bring a detached, intellectual, and independent approach to a persons emotions and personal life. Those with this placement may be drawn to unconventional relationships or may prioritize intellectual or ideological compatibility over emotional compatibility.',
      in_pisces:
        'This placement can bring a dreamy, imaginative, and emotionally sensitive approach to a persons emotional life. Those with this placement may be highly intuitive and empathetic and may need to learn how to establish healthy emotional boundaries.',
    },
    {
      id: 103,
      name: 'Ascendant',
      represent:
        'The Ascendant represents your physical body and awakening consciousness.',
      in_aries:
        'People with an Aries Ascendant are typically bold, dynamic, and energetic. They have a strong sense of self and are not afraid to take risks.',
      in_taurus:
        'People with a Taurus Ascendant are typically calm, composed, and grounded. They have a deep appreciation for beauty and comfort, and may be skilled in practical and creative pursuits.',
      in_gemini:
        'People with a Gemini Ascendant are typically curious, sociable, and versatile. They have a quick wit and a love of learning, and may excel in communication and intellectual pursuits.',
      in_cancer:
        'People with a Cancer Ascendant are typically sensitive, nurturing, and protective. They have a strong attachment to home and family, and may be gifted in creative and emotional pursuits.',
      in_leo:
        'People with a Leo Ascendant are typically confident, charismatic, and theatrical. They have a strong sense of pride and a desire to be seen and recognized for their talents and accomplishments.',
      in_virgo:
        'People with a Virgo Ascendant are typically analytical, detail-oriented, and practical. They have a strong work ethic and a desire for efficiency and order in their lives.',
      in_libra:
        'People with a Libra Ascendant are typically charming, diplomatic, and balanced. They have a strong sense of fairness and justice, and may excel in social and creative pursuits.',
      in_scorpio:
        'People with a Scorpio Ascendant are typically intense, mysterious, and transformative. They have a deep emotional depth and may be gifted in research, psychology, or other forms of investigation.',
      in_sagittarius:
        'eople with a Sagittarius Ascendant are typically adventurous, philosophical, and expansive. They have a love of exploration and may be gifted in teaching, writing, or other forms of communication.',
      in_capricorn:
        'People with a Capricorn Ascendant are typically responsible, ambitious, and disciplined. They have a strong sense of duty and may excel in business, politics, or other forms of leadership.',
      in_aquarius:
        'People with an Aquarius Ascendant are typically unconventional, independent, and intellectual. They have a desire for freedom and may be gifted in science, technology, or other forms of innovation.',
      in_pisces:
        'People with a Pisces Ascendant are typically intuitive, empathetic, and artistic. They have a deep spiritual connection and may be gifted in music, poetry, or other forms of expression.',
    },
    {
      id: 104,
      name: 'Mercury',
      represent:
        'Mercury represents how you communicate, talk, think, and process information.',
      in_aries:
        'This placement can signify quick thinking and communication skills. Those with this placement may be direct in their communication, assertive in their opinions, and enjoy intellectual challenges.',
      in_taurus:
        'This placement can signify a methodical and practical approach to communication and learning. Those with this placement may be slow to make decisions but are thorough in their thought process and enjoy tangible, hands-on experiences.',
      in_gemini:
        'This placement is ruled by Mercury, the planet of communication, and can signify a strong talent for verbal and written expression. Those with this placement may have a natural curiosity, a talent for learning languages, and may enjoy debate or discussion.',
      in_cancer:
        'This placement can bring a sensitive, intuitive approach to communication and learning. Those with this placement may have a talent for writing or storytelling, and may be drawn to history, genealogy, or other topics related to the past.',
      in_leo:
        'This placement can bring a dramatic, expressive approach to communication and learning. Those with this placement may have a talent for public speaking, and may enjoy creative writing or performance.',
      in_virgo:
        'This placement is ruled by Mercury, and can bring a sharp, analytical mind and a talent for critical thinking. Those with this placement may enjoy research and analysis, and may be drawn to technical or scientific fields.',
      in_libra:
        'This placement can bring a cooperative, diplomatic approach to communication and learning. Those with this placement may have a talent for mediation and may value harmony in their relationships and work environments.',
      in_scorpio:
        'This placement can bring a perceptive, insightful, and investigative approach to communication and learning. Those with this placement may be drawn to uncovering hidden truths and may have a talent for research or investigation.',
      in_sagittarius:
        'This placement can bring a love of learning, philosophy, and debate to a persons communication and thinking style. Those with this placement may have a talent for teaching or may be drawn to careers related to writing, publishing, or public speaking.',
      in_capricorn:
        'This placement can bring a practical, grounded, and strategic approach to a persons communication and thinking style. Those with this placement may excel in careers related to business, law, or finance, and may have a talent for strategic planning and decision-making.',
      in_aquarius:
        'This placement can bring a unique, innovative, and intellectual approach to a persons communication and thinking style. Those with this placement may be drawn to careers related to science, technology, or social justice and may have a talent for understanding complex ideas.',
      in_pisces:
        'This placement can bring a highly imaginative and intuitive approach to a persons communication and thinking style. Those with this placement may excel in creative or artistic pursuits and may have a talent for understanding complex emotional or spiritual concepts.',
    },
    {
      id: 105,
      name: 'Venus',
      represent: 'Venus represents how and what you love.',
      in_aries:
        'This placement can bring a need for independence and adventure in relationships. Those with this placement may be attracted to partners who are confident, independent, and assertive.',
      in_taurus:
        'This placement can bring a deep appreciation for beauty, luxury, and sensuality. Those with this placement may have a strong need for affection, material comforts, and may have a taste for fine art, music, or cuisine.',
      in_gemini:
        'This placement can bring a need for mental stimulation and variety in relationships. Those with this placement may be flirtatious, enjoy intellectual conversation, and may have a talent for writing or storytelling.',
      in_cancer:
        'This placement can bring a need for emotional security and nurturing in relationships. Those with this placement may have a strong connection to family and may seek a partner who is nurturing and supportive.',
      in_leo:
        'This placement can bring a need for attention and validation in relationships, as well as a love for luxury and romance. Those with this placement may be generous, affectionate, and enjoy lavish displays of love.',
      in_virgo:
        'This placement can bring a need for practicality and routine in relationships, as well as a love for detail and precision. Those with this placement may be critical of their partners, and may appreciate small, thoughtful gestures of affection.',
      in_libra:
        'This placement is ruled by Venus and can bring a strong need for love, beauty, and harmony in relationships. Those with this placement may be romantic, charming, and may have a talent for art or design.',
      in_scorpio:
        'This placement can bring intensity, passion, and depth to a persons love life and relationships. Those with this placement may have a magnetic allure and may be drawn to intense and transformative experiences in love and partnership.',
      in_sagittarius:
        'This placement can bring a love of adventure and exploration to a persons love life and relationships. Those with this placement may be drawn to partners who share their sense of wanderlust and may prioritize intellectual connection in their relationships.',
      in_capricorn:
        'This placement can bring a desire for stability, security, and long-term commitment in a persons love life and relationships. Those with this placement may be drawn to partners who are responsible and financially stable and may prioritize practical considerations over romantic ideals.',
      in_aquarius:
        'This placement can bring a desire for independence, freedom, and intellectual stimulation in a persons love life and relationships. Those with this placement may be drawn to partners who are unconventional or have a strong sense of individuality and may prioritize intellectual or ideological compatibility over romantic ideals.',
      in_pisces:
        'This placement can bring a romantic, dreamy, and highly idealistic approach to a persons love life and relationships. Those with this placement may prioritize emotional connection and spiritual compatibility over practical concerns and may have a talent for creative or artistic expression.',
    },
    {
      id: 106,
      name: 'Mars',
      represent: 'Mars represents motivation, action, and sexuality.',
      in_aries:
        'Mars is the ruling planet of Aries, so this placement can signify a strong sense of drive, ambition, and energy. Those with this placement may be competitive, passionate, and assertive in pursuing their goals.',
      in_taurus:
        'This placement can signify a slow and steady approach to action and pursuit of goals. Those with this placement may be persistent, determined, and have a strong willpower.',
      in_gemini:
        'This placement can signify a fast-paced, mental approach to action and pursuit of goals. Those with this placement may be witty, charming, and may have a talent for persuasion and negotiation.',
      in_cancer:
        'This placement can bring a passive-aggressive approach to action and pursuit of goals. Those with this placement may have a strong sense of self-protection and may struggle with assertiveness.',
      in_leo:
        'This placement can bring a strong desire for attention and recognition, as well as a competitive streak. Those with this placement may be bold, confident, and may have a talent for leadership.',
      in_virgo:
        'This placement can bring a methodical, practical approach to action and pursuit of goals. Those with this placement may be hardworking, efficient, and may have a talent for troubleshooting and problem-solving.',
      in_libra:
        'This placement can bring a desire for harmony and balance in action and pursuit of goals. Those with this placement may be skilled at negotiation and may value fairness and compromise in their relationships.',
      in_scorpio:
        'This placement can bring intensity, power, and determination to a persons actions and pursuit of goals. Those with this placement may be highly competitive and may have a strong drive to succeed.',
      in_sagittarius:
        'This placement can bring a sense of courage, passion, and determination to a persons actions and pursuit of goals. Those with this placement may be drawn to risky or adventurous activities and may have a strong desire for independence and freedom.',
      in_capricorn:
        'This placement can bring a sense of determination, discipline, and strategic planning to a persons actions and pursuit of goals. Those with this placement may excel in careers related to business, law, or politics, and may have a talent for leadership and management.',
      in_aquarius:
        'This placement can bring a rebellious, independent, and unconventional approach to a persons actions and pursuit of goals. Those with this placement may excel in careers related to science, technology, or social justice and may have a talent for innovation and creativity.',
      in_pisces:
        'This placement can bring a passive, intuitive, and emotionally sensitive approach to a persons actions and pursuit of goals. Those with this placement may struggle with assertiveness and may need to learn how to establish healthy boundaries and assert their needs.',
    },
    {
      id: 107,
      name: 'Jupiter',
      represent:
        'JUpiter represents growth, expansion, progress, and philosophy.',
      in_aries:
        'This placement can bring good luck and opportunities for growth and expansion. Those with this placement may be confident, enthusiastic, and enjoy taking risks.',
      in_taurus:
        'This placement can bring good luck and opportunities for material success and abundance. Those with this placement may have a strong sense of self-worth, enjoy luxury, and have a talent for manifesting abundance.',
      in_gemini:
        'This placement can bring opportunities for growth and expansion related to communication, learning, and socializing. Those with this placement may have a talent for teaching, writing, or speaking, and may enjoy exploring new cultures and ideas.',
      in_cancer:
        'This placement can bring good luck and opportunities related to emotional fulfillment, family, and home. Those with this placement may have a talent for nurturing others, and may experience growth and expansion through domestic pursuits.',
      in_leo:
        'This placement can bring good luck and opportunities related to creative expression, leadership, and self-confidence. Those with this placement may have a talent for teaching, mentoring, or performing.',
      in_virgo:
        'This placement can bring good luck and opportunities related to service, health, and practical pursuits. Those with this placement may have a talent for healing or helping others, and may experience growth and expansion through attention to detail and hard work.',
      in_libra:
        'This placement can bring good luck and opportunities related to partnerships, art, and diplomacy. Those with this placement may have a talent for bringing people together and may experience growth and expansion through their relationships and creative pursuits.',
      in_scorpio:
        'This placement can bring transformative experiences related to expansion, growth, and abundance. Those with this placement may experience significant shifts in their worldview and may have a talent for uncovering hidden truths or secrets.',
      in_sagittarius:
        'This placement can bring expansive experiences related to growth, abundance, and spirituality. Those with this placement may have a talent for teaching or may be drawn to careers related to higher education, religion, or philosophy.',
      in_capricorn:
        'This placement can bring opportunities for growth and success related to hard work, discipline, and practical planning. Those with this placement may be drawn to careers related to business, law, or finance, and may have a talent for strategic planning and decision-making.',
      in_aquarius:
        'This placement can bring opportunities for growth and success related to social causes, movements, or innovations. Those with this placement may be drawn to careers related to science, technology, or social justice and may have a talent for understanding complex systems.',
      in_pisces:
        'This placement can bring opportunities for growth and success related to spirituality, creativity, and intuition. Those with this placement may have a talent for understanding and synthesizing complex spiritual or emotional concepts and may be drawn to careers related to the arts or spirituality.',
    },
    {
      id: 108,
      name: 'Saturn',
      represent:
        'Saturn represents responsibility, restrictions, limits, boundaries, fears, and self-discipline.',
      in_aries:
        'This placement can bring challenges and obstacles that require persistence and hard work to overcome. Those with this placement may struggle with impulsiveness and may need to learn patience and discipline.',
      in_taurus:
        'This placement can bring lessons and challenges related to stability, responsibility, and perseverance. Those with this placement may struggle with fears of instability and may need to learn how to create a solid foundation for their goals and ambitions.',
      in_gemini:
        'This placement can bring lessons and challenges related to communication and learning. Those with this placement may struggle with indecisiveness, and may need to learn how to be more focused and disciplined in their pursuits.',
      in_cancer:
        'This placement can bring lessons and challenges related to emotional maturity, responsibility, and boundaries. Those with this placement may struggle with emotional suppression, and may need to learn how to establish healthy emotional boundaries.',
      in_leo:
        'This placement can bring lessons and challenges related to self-expression, creativity, and leadership. Those with this placement may struggle with self-doubt or a fear of being judged, and may need to learn how to take risks and express themselves authentically.',
      in_virgo:
        'This placement can bring lessons and challenges related to self-criticism, perfectionism, and anxiety. Those with this placement may struggle with feeling like they are not doing enough, and may need to learn how to relax and accept imperfection.',
      in_libra:
        'This placement can bring lessons and challenges related to partnerships, fairness, and balance. Those with this placement may struggle with commitment and may need to learn how to stand up for themselves in their relationships.',
      in_scorpio:
        'This placement can bring challenges and lessons related to power, control, and transformation. Those with this placement may struggle with issues related to trust and may need to learn how to manage their intense emotions and impulses.',
      in_sagittarius:
        'This placement can bring challenges and lessons related to responsibility, discipline, and structure. Those with this placement may struggle with issues related to taking risks or may need to learn how to balance their desire for adventure with their need for stability.',
      in_capricorn:
        'This placement can bring challenges and lessons related to responsibility, discipline, and structure. Those with this placement may struggle with issues related to self-doubt or may need to learn how to balance their desire for achievement with their need for rest and relaxation.',
      in_aquarius:
        'This placement can bring challenges and lessons related to independence, individuality, and unconventional thinking. Those with this placement may struggle with issues related to conformity or may need to learn how to balance their desire for independence with their need for collaboration and cooperation.',
      in_pisces:
        'This placement can bring challenges and lessons related to emotional boundaries, spiritual growth, and creative expression. Those with this placement may struggle with issues related to self-sacrifice or may need to learn how to establish healthy emotional boundaries and express their creativity in a constructive way.',
    },
    {
      id: 109,
      name: 'Uranus',
      represent:
        'Uranus represents innovation, progression, rebellion, and change.',
      in_aries:
        'This placement can bring a need for individuality, freedom, and innovation. Those with this placement may be rebellious, independent, and enjoy breaking rules.',
      in_taurus:
        'This placement can bring sudden and unexpected changes related to material possessions, finances, and values. Those with this placement may be innovative and have a talent for creating new approaches to financial success.',
      in_gemini:
        'This placement can bring sudden and unexpected changes related to communication, technology, and intellectual pursuits. Those with this placement may have a talent for innovation, and may enjoy exploring new technologies or alternative ways of thinking.',
      in_cancer:
        'This placement can bring sudden and unexpected changes related to family, home, and emotional security. Those with this placement may have a talent for innovation related to domestic or nurturing pursuits.',
      in_leo:
        'This placement can bring sudden and unexpected changes related to self-expression and creative pursuits. Those with this placement may have a talent for innovation and experimentation, and may enjoy unconventional forms of self-expression.',
      in_virgo:
        'This placement can bring sudden and unexpected changes related to health, work, and service. Those with this placement may have a talent for innovation and experimentation in practical fields, and may enjoy unconventional approaches to healing or problem-solving.',
      in_libra:
        'This placement can bring sudden and unexpected changes related to partnerships and relationships. Those with this placement may have a talent for innovation and may enjoy exploring unconventional forms of partnership.',
      in_scorpio:
        'This placement can bring sudden and unexpected changes related to power, transformation, and sexuality. Those with this placement may be drawn to unconventional forms of sexuality and may have a talent for breaking down societal norms and expectations.',
      in_sagittarius:
        'This placement can bring sudden and unexpected changes related to travel, higher education, and philosophy. Those with this placement may be drawn to unconventional ideas or ways of living and may have a talent for breaking down societal norms and expectations.',
      in_capricorn:
        'This placement can bring sudden and unexpected changes related to career, business, or finance. Those with this placement may be drawn to unconventional approaches to these areas and may have a talent for breaking down established norms and expectations.',
      in_aquarius:
        'This placement can signify sudden and unexpected changes related to technology, social movements, or unconventional thinking. Those with this placement may have a talent for innovation and creativity and may be drawn to careers related to science, technology, or social justice.',
      in_pisces:
        'This placement can signify sudden and unexpected changes related to spirituality, creativity, or intuition. Those with this placement may have a talent for unconventional thinking or may experience sudden shifts in their relationship to spirituality or creativity.',
    },
    {
      id: 110,
      name: 'Neptune',
      represent: 'Neptune represents dreams, imagination, and the unconscious.',
      in_aries:
        'This placement can bring a need for spiritual growth and a desire for meaningful experiences. Those with this placement may be imaginative, creative, and have a strong sense of intuition.',
      in_taurus:
        'This placement can bring a need for spiritual connection and grounding in material pursuits. Those with this placement may have a talent for bringing artistic expression to practical pursuits or may have a strong connection to the natural world.',
      in_gemini:
        'This placement can bring a need for spiritual connection and meaning in intellectual pursuits. Those with this placement may have a talent for artistic expression, and may enjoy exploring spirituality, mysticism, or metaphysical subjects.',
      in_cancer:
        'This placement can bring a need for spiritual connection and emotional depth in relationships. Those with this placement may have a talent for creative expression, and may be drawn to mystical or spiritual pursuits related to family and home.',
      in_leo:
        'This placement can bring a need for creative inspiration and a desire for recognition or validation. Those with this placement may have a talent for creative expression, and may enjoy exploring mystical or spiritual themes in their work.',
      in_virgo:
        'This placement can bring a need for practical spirituality and a desire for healing or service to others. Those with this placement may have a talent for using creativity and imagination in practical fields, such as medicine or therapy.',
      in_libra:
        'This placement can bring a need for idealized partnerships and a desire for beauty and harmony in relationships. Those with this placement may have a talent for creative expression and may enjoy exploring mystical or spiritual themes in their relationships.',
      in_scorpio:
        'This placement can bring a need for spiritual transformation and a desire for deep emotional connection. Those with this placement may have a talent for psychic or intuitive abilities and may be drawn to mystical or spiritual practices.',
      in_sagittarius:
        'This placement can bring a desire for spiritual or philosophical exploration and a need for emotional freedom. Those with this placement may have a talent for creative or artistic expression and may be drawn to mystical or spiritual practices.',
      in_capricorn:
        'This placement can bring challenges related to balancing practical considerations with spiritual or creative expression. Those with this placement may have a talent for creative or artistic expression in practical contexts or may be drawn to careers related to spirituality or the arts.',
      in_aquarius:
        'This placement can bring challenges related to balancing individuality and independence with spirituality or creativity. Those with this placement may have a talent for bringing creativity or spirituality to unconventional contexts or may be drawn to careers related to technology or social justice.',
      in_pisces:
        'This placement can bring a deep connection to spirituality, creativity, and intuition, as well as challenges related to self-deception or boundarylessness. Those with this placement may have a talent for spiritual or artistic expression and may need to learn how to establish healthy emotional and spiritual boundaries.',
    },
    {
      id: 111,
      name: 'Pluto',
      represent:
        'Pluto represents power, intensity, obsession, control, and transformation.',
      in_aries:
        'This placement can signify transformative experiences and a need for personal power and control. Those with this placement may be intense, passionate, and enjoy challenges and overcoming obstacles.',
      in_taurus:
        'This placement can signify transformative experiences related to material possessions, values, and security. Those with this placement may have a deep desire for control and may experience significant shifts in their relationship to material success and abundance.',
      in_gemini:
        'This placement can signify transformative experiences related to communication, learning, and intellectual pursuits. Those with this placement may have a talent for research or investigation, and may experience significant shifts in their relationship to knowledge and information.',
      in_cancer:
        'This placement can signify transformative experiences related to emotional healing and family dynamics. Those with this placement may have a talent for emotional transformation, and may experience significant shifts in their relationship to family and home over their lifetime.',
      in_leo:
        'This placement can signify transformative experiences related to self-expression, leadership, and creativity. Those with this placement may experience significant shifts in their relationship to power and recognition, and may have a talent for creative transformation.',
      in_virgo:
        'This placement can signify transformative experiences related to health, work, and service. Those with this placement may experience significant shifts in their relationship to power and control, and may have a talent for transforming practical fields such as medicine or technology.',
      in_libra:
        'This placement can signify transformative experiences related to partnerships and relationships. Those with this placement may experience significant shifts in their relationship patterns and may have a talent for transforming relationship dynamics.',
      in_scorpio:
        'This placement can signify transformative experiences related to power, sexuality, and transformation. Those with this placement may have a talent for uncovering hidden truths and may experience significant shifts in their personal power and self-expression.',
      in_sagittarius:
        'This placement can signify transformative experiences related to growth, change, and spiritual development. Those with this placement may experience significant shifts in their worldview and may have a talent for uncovering hidden truths or philosophies.',
      in_capricorn:
        'This placement can signify transformative experiences related to power, authority, and structures of society. Those with this placement may have a talent for dismantling established power structures or may experience significant shifts in their relationship to authority and power.',
      in_aquarius:
        'This placement can signify transformative experiences related to social change, movements, or unconventional thinking. Those with this placement may have a talent for dismantling established norms and expectations or may experience significant shifts in their relationship to social structures and movements.',
      in_pisces:
        'This placement can signify transformative experiences related to spirituality, creativity, and intuition. Those with this placement may have a talent for deep spiritual or emotional transformation and may experience significant shifts in their relationship to spiritual or creative pursuits.',
    },
  ])
}
