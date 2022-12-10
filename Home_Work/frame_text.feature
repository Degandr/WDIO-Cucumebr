Feature: The Internet Guinea Pig Website_3

  Scenario Outline: As a user, I can read text from Frame elements

    Given I go to iFrame page
    When I go to Frame
    Then I need make sure that default text is <message>

    Examples:
      | message |
      | Your content goes here.|